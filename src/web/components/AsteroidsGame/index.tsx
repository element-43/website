import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

// Action creators.
import { closeAsteroids } from '../../store/layout/actionsCreators';

// Classes.
import { Asteroid } from './models/Asteroid';
import { Explosion } from './models/Explosion';
import { Ship } from './models/Ship';

// Components.
import { Button } from '../Button';

// Constants.
import {
  ASTEROID_LARGE_POINTS,
  ASTEROID_MEDIUM_POINTS,
  ASTEROID_SIZE,
  ASTEROID_SMALL_POINTS,
  FPS,
  HIGH_SCORE_KEY,
  SHIP_BLINK_DURATION,
  SHIP_SIZE,
} from './constants';

// Styles.
import palette from '../../styles/palette';

// Utils.
import {
  distBetweenPoints,
  drawAsteroid,
  drawBasicShip,
  drawExplosion,
  drawHighScore,
  drawLaser,
  drawScore,
  drawShip,
  drawSpace,
  drawText,
  moveAsteroids,
  moveLasers,
} from './utils';
import { isLocalStorageAvailable } from '../../utils/application';

interface Props {
  closeAsteroids: typeof closeAsteroids;
}

const height: number = 570;
const width: number = 760;

const StyledButton = styled(Button)`
  margin: 2rem 0 0;
`;
const Container = styled.div`
  background-color: ${palette.greyScale.darkGrey};
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
`;
const Wrapper = styled.div`
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
`;

class AsteroidsGame extends React.PureComponent<Props> {
  private asteroids: Asteroid[];
  private readonly canvasRef: React.RefObject<HTMLCanvasElement>;
  private explosions: Explosion[];
  private highScore: number;
  private intervalId: number | null;
  private level: number;
  private lives: number;
  private score: number;
  private ship?: Ship;
  private text: string;
  private textOpacity: number;

  static createAsteroidBelt(ship: Ship, level: number): Asteroid[] {
    const asteroids: Asteroid[] = [];
    let x: number;
    let y: number;

    for (let i: number = 0; i < 3 + level; i++) {
      do {
        x = Math.floor(Math.random() * width);
        y = Math.floor(Math.random() * height);
      } while (
        distBetweenPoints(ship.x, ship.y, x, y) <
        ASTEROID_SIZE * 2 + ship.radius
      );
      {
        asteroids.push(new Asteroid(x, y, Math.ceil(ASTEROID_SIZE / 2), level));
      }
    }

    return asteroids;
  }

  constructor(props: Props) {
    super(props);

    this.asteroids = [];
    this.canvasRef = React.createRef();
    this.explosions = [];
    this.highScore = 0;
    this.intervalId = null;
    this.level = 0;
    this.lives = 3;
    this.score = 0;
    this.text = 'Ready';
    this.textOpacity = 1.0;

    // Bind functions.
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount(): void {
    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keyup', this.onKeyUp);

    this.newGame();

    this.intervalId = window.setInterval(this.update, 1000 / FPS);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', this.onKeyDown);
    document.removeEventListener('keyup', this.onKeyUp);

    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }
  }

  destroyAsteroid(index: number): void {
    const asteroid: Asteroid = this.asteroids[index];
    let newAsteroid: Asteroid;

    if (asteroid) {
      switch (asteroid.radius) {
        case Math.ceil(ASTEROID_SIZE / 2):
          newAsteroid = new Asteroid(
            asteroid.x,
            asteroid.y,
            Math.ceil(ASTEROID_SIZE / 4),
            this.level
          );

          this.asteroids.push(newAsteroid);
          this.asteroids.push(newAsteroid);

          this.score += ASTEROID_LARGE_POINTS;

          break;
        case Math.ceil(ASTEROID_SIZE / 4):
          newAsteroid = new Asteroid(
            asteroid.x,
            asteroid.y,
            Math.ceil(ASTEROID_SIZE / 8),
            this.level
          );

          this.asteroids.push(newAsteroid);
          this.asteroids.push(newAsteroid);

          this.score += ASTEROID_MEDIUM_POINTS;

          break;
        default:
          this.score += ASTEROID_SMALL_POINTS;

          break;
      }

      // check high score
      if (this.score > this.highScore) {
        this.highScore = this.score;

        if (isLocalStorageAvailable()) {
          window.localStorage.setItem(
            HIGH_SCORE_KEY,
            this.highScore.toString()
          );
        }
      }

      // Destroy asteroid.
      this.asteroids.splice(index, 1);

      // Update the level.
      if (this.asteroids.length <= 0) {
        this.level++;

        this.newLevel();
      }
    }
  }

  newGame(): void {
    let highScore: string | null;

    this.highScore = 0;
    this.level = 0;
    this.lives = 3;
    this.score = 0;
    this.ship = new Ship(width / 2, height / 2);

    if (isLocalStorageAvailable()) {
      highScore = window.localStorage.getItem(HIGH_SCORE_KEY);

      if (highScore) {
        this.highScore = parseInt(highScore);
      }
    }

    this.newLevel();
  }

  newLevel(): void {
    if (this.ship) {
      this.text = `Level ${this.level + 1}`;
      this.textOpacity = 1.0;
      this.asteroids = AsteroidsGame.createAsteroidBelt(this.ship, this.level);
    }
  }

  onKeyDown(event: DocumentEventMap['keydown']): void {
    if (this.ship && !this.ship.dead) {
      switch (event.keyCode) {
        case 32: // Space bar (shoot laser).
          this.ship.shootLaser();

          break;
        case 37: // Left arrow (rotate ship left).
          this.ship.rotation = ((360 / 180) * Math.PI) / FPS;

          break;
        case 38: // Up arrow (thrust the ship forward).
          this.ship.thrusting = true;

          break;
        case 39: // Right arrow (rotate ship right).
          this.ship.rotation = ((-360 / 180) * Math.PI) / FPS;

          break;
      }
    }
  }

  onKeyUp(event: DocumentEventMap['keyup']): void {
    if (this.ship && !this.ship.dead) {
      switch (event.keyCode) {
        case 32: // Space bar (allow shooting again).
          this.ship.canShoot = true;

          break;
        case 37: // Left arrow (stop rotating left).
          this.ship.rotation = 0;

          break;
        case 38: // Up arrow (stop thrusting).
          this.ship.thrusting = false;

          break;
        case 39: // Right arrow (stop rotating right).
          this.ship.rotation = 0;

          break;
      }
    }
  }

  render(): JSX.Element {
    return (
      <Wrapper>
        <Container>
          <canvas height={height} ref={this.canvasRef} width={width} />
          <StyledButton onClick={() => this.props.closeAsteroids()}>
            I Quit
          </StyledButton>
        </Container>
      </Wrapper>
    );
  }

  update(): void {
    const { current } = this.canvasRef;
    let ctx: CanvasRenderingContext2D;
    let isExploding: boolean;

    if (current && this.ship) {
      ctx = current.getContext('2d') as CanvasRenderingContext2D;
      isExploding = this.ship.explodeTime > 0;

      // Draw space.
      drawSpace(ctx, current.height, current.width);

      // Draw asteroids.
      for (let i: number = 0; i < this.asteroids.length; i++) {
        drawAsteroid(ctx, this.asteroids[i]);
      }

      // Draw ship.
      if (!this.ship.dead) {
        if (!isExploding) {
          if (this.ship.blinkNum % 2 === 0) {
            drawShip(ctx, this.ship);
          }

          // Handle blinking
          if (this.ship.blinkNum > 0) {
            // Reduce the blink time.
            this.ship.blinkTime--;

            // Reduce the blink number.
            if (this.ship.blinkTime == 0) {
              this.ship.blinkTime = Math.ceil(SHIP_BLINK_DURATION * FPS);
              this.ship.blinkNum--;
            }
          }
        } else {
          // this.explosions.push(new Explosion(this.ship.x, this.ship.y));
          // drawExplodingShip(ctx, this.ship);
        }
      }

      // Draw lasers.
      for (let i: number = 0; i < this.ship.lasers.length; i++) {
        drawLaser(ctx, this.ship.lasers[i]);
      }

      // Draw explosions.
      for (let i: number = 0; i < this.explosions.length; i++) {
        // If no more particles are in the explosion, we can just remove it.
        if (this.explosions[i].particles.length === 0) {
          this.explosions.splice(i, 1);

          return;
        }

        drawExplosion(ctx, this.explosions[i]);
      }

      // Draw text.
      if (this.textOpacity >= 0) {
        drawText(
          ctx,
          this.text,
          this.textOpacity,
          current.height,
          current.width
        );

        this.textOpacity -= 1.0 / 2.5 / FPS;
      }

      // Start a new game.
      if (this.ship.dead) {
        this.newGame();
      }

      // Draw the lives.
      for (let i: number = 0; i < this.lives; i++) {
        drawBasicShip(
          ctx,
          {
            angle: 0.5 * Math.PI,
            radius: this.ship.radius,
            x: SHIP_SIZE + i * SHIP_SIZE * 1.2,
            y: SHIP_SIZE,
          },
          isExploding && i === this.lives - 1
            ? palette.ui.red
            : palette.greyScale.white
        );
      }

      // Draw score.
      drawScore(ctx, this.score, current.width);

      // Draw high score.
      drawHighScore(ctx, this.highScore, current.width);

      // Detect laser hits on asteroids.
      for (let i: number = this.asteroids.length - 1; i >= 0; i--) {
        // Loop over the lasers.
        for (let j: number = this.ship.lasers.length - 1; j >= 0; j--) {
          // Detect hits
          if (
            this.ship.lasers[j].explodeTime == 0 &&
            distBetweenPoints(
              this.asteroids[i].x,
              this.asteroids[i].y,
              this.ship.lasers[j].x,
              this.ship.lasers[j].y
            ) < this.asteroids[i].radius
          ) {
            // Destroy the asteroid and activate the laser explosion.
            this.destroyAsteroid(i);

            this.ship.lasers[j].explodeTime = Math.ceil(0.1 * FPS);
            this.explosions.push(
              new Explosion(this.ship.lasers[j].x, this.ship.lasers[j].y)
            );

            break;
          }
        }
      }

      // Check for asteroid collisions (when not exploding).
      if (!isExploding) {
        // Only check when not blinking.
        if (this.ship.blinkNum == 0) {
          for (let i: number = 0; i < this.asteroids.length; i++) {
            if (
              distBetweenPoints(
                this.ship.x,
                this.ship.y,
                this.asteroids[i].x,
                this.asteroids[i].y
              ) <
              this.ship.radius + this.asteroids[i].radius
            ) {
              this.destroyAsteroid(i);

              this.ship.explodeTime = Math.ceil(0.3 * FPS);
              this.explosions.push(new Explosion(this.ship.x, this.ship.y));

              break;
            }
          }
        }

        // Rotate the ship.
        this.ship.angle += this.ship.rotation;

        // Move the ship.
        this.ship.x += this.ship.thrust.x;
        this.ship.y += this.ship.thrust.y;
      } else {
        // Reduce the explode time.
        this.ship.explodeTime--;

        // Reset the ship after the explosion has finished.
        if (this.ship.explodeTime === 0) {
          this.lives--;

          // Game over.
          if (this.lives <= 0) {
            this.ship.dead = true;
            this.text = 'Game Over';
            this.textOpacity = 1.0;
          } else {
            this.ship = new Ship(current.width / 2, current.height / 2);
          }
        }
      }

      // Handle edge of screen.
      if (this.ship.x < 0 - this.ship.radius) {
        this.ship.x = current.width + this.ship.radius;
      }

      if (this.ship.x > current.width + this.ship.radius) {
        this.ship.x = 0 - this.ship.radius;
      }

      if (this.ship.y < 0 - this.ship.radius) {
        this.ship.y = current.height + this.ship.radius;
      }

      if (this.ship.y > current.height + this.ship.radius) {
        this.ship.y = 0 - this.ship.radius;
      }

      // Move the lasers.
      moveLasers(this.ship.lasers, current.height, current.width);

      // Move the asteroids.
      moveAsteroids(this.asteroids, current.height, current.width);
    }
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closeAsteroids: bindActionCreators(closeAsteroids, dispatch),
});

export default connect(
  null,
  mapDispatchToProps
)(AsteroidsGame);
export { AsteroidsGame };
