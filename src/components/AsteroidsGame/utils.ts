// Classes.
import { Asteroid } from './models/Asteroid';
import { Explosion } from './models/Explosion';
import { Particle } from './models/Particle';
import { ILaser, Ship } from './models/Ship';

// Constants.
import {
  ASTEROID_SIZE,
  FONT_SIZE,
  FONT_TYPE,
  FPS,
  FRICTION,
  SHIP_SIZE,
} from './constants';

// Theme.
import palette from '../../theme/palette';

// Types.
import { IEntity } from './types';

export function distBetweenPoints(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

export function drawAsteroid(
  ctx: CanvasRenderingContext2D,
  asteroid: Asteroid
): void {
  ctx.strokeStyle = palette.ui.slateGrey;
  ctx.lineWidth = SHIP_SIZE / 30;

  // Draw the path.
  ctx.beginPath();
  ctx.moveTo(
    asteroid.x +
      asteroid.radius * asteroid.offsets[0] * Math.cos(asteroid.angle),
    asteroid.y +
      asteroid.radius * asteroid.offsets[0] * Math.sin(asteroid.angle)
  );

  // Draw the polygon.
  for (let i: number = 1; i < asteroid.vertices; i++) {
    ctx.lineTo(
      asteroid.x +
        asteroid.radius *
          asteroid.offsets[i] *
          Math.cos(asteroid.angle + (i * Math.PI * 2) / asteroid.vertices),
      asteroid.y +
        asteroid.radius *
          asteroid.offsets[i] *
          Math.sin(asteroid.angle + (i * Math.PI * 2) / asteroid.vertices)
    );
  }
  ctx.closePath();
  ctx.stroke();
}

export function drawBasicShip(
  ctx: CanvasRenderingContext2D,
  entity: IEntity,
  colour?: string
): void {
  ctx.strokeStyle = colour || palette.greyScale.white;
  ctx.lineWidth = ASTEROID_SIZE / 40;
  ctx.beginPath();
  ctx.moveTo(
    // Nose of the ship.
    entity.x + (4 / 3) * entity.radius * Math.cos(entity.angle),
    entity.y - (4 / 3) * entity.radius * Math.sin(entity.angle)
  );
  ctx.lineTo(
    // Rear left.
    entity.x -
      entity.radius *
        ((2 / 3) * Math.cos(entity.angle) + Math.sin(entity.angle)),
    entity.y +
      entity.radius *
        ((2 / 3) * Math.sin(entity.angle) - Math.cos(entity.angle))
  );
  ctx.lineTo(
    // Rear right.
    entity.x -
      entity.radius *
        ((2 / 3) * Math.cos(entity.angle) - Math.sin(entity.angle)),
    entity.y +
      entity.radius *
        ((2 / 3) * Math.sin(entity.angle) + Math.cos(entity.angle))
  );
  ctx.closePath();
  ctx.stroke();
}

export function drawExplosion(
  ctx: CanvasRenderingContext2D,
  explosion: Explosion
): void {
  const particles: Particle[] = explosion.particles.slice();

  for (let i: number = 0; i < explosion.particles.length; i++) {
    const particle: Particle = explosion.particles[i];

    if (particle.radius <= 0) {
      particles.splice(i, 1);

      continue;
    }

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, Math.PI * 2, 0, false);
    ctx.closePath();
    ctx.fillStyle = palette.greyScale.white;
    ctx.fill();

    // Update
    particle.x += particle.xv;
    particle.y += particle.yv;
    particle.radius -= 0.1;
  }

  explosion.particles = particles;
}

export function drawHighScore(
  ctx: CanvasRenderingContext2D,
  highScore: number,
  width: number
): void {
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = palette.greyScale.white;
  ctx.font = `${FONT_SIZE * 0.75}px ${FONT_TYPE}`;
  ctx.fillText(`Highest: ${highScore}`, width / 2, SHIP_SIZE);
}

export function drawLaser(ctx: CanvasRenderingContext2D, laser: ILaser): void {
  ctx.fillStyle = palette.greyScale.white;
  ctx.beginPath();
  ctx.arc(laser.x, laser.y, SHIP_SIZE / 15, 0, Math.PI * 2, false);
  ctx.fill();
}

export function drawShip(ctx: CanvasRenderingContext2D, ship: Ship): void {
  const thrust: number = 5; // Acceleration of the ship in pixels per second per second.

  drawBasicShip(ctx, {
    angle: ship.angle,
    radius: ship.radius,
    x: ship.x,
    y: ship.y,
  });

  if (ship.thrusting) {
    ship.thrust.x += (thrust * Math.cos(ship.angle)) / FPS;
    ship.thrust.y -= (thrust * Math.sin(ship.angle)) / FPS;

    if (ship.blinkNum % 2 === 0) {
      ctx.fillStyle = palette.ui.red;
      ctx.strokeStyle = palette.ui.yellow;
      ctx.lineWidth = SHIP_SIZE / 10;
      ctx.beginPath();
      ctx.moveTo(
        // rear left
        ship.x -
          ship.radius *
            ((2 / 3) * Math.cos(ship.angle) + 0.5 * Math.sin(ship.angle)),
        ship.y +
          ship.radius *
            ((2 / 3) * Math.sin(ship.angle) - 0.5 * Math.cos(ship.angle))
      );
      ctx.lineTo(
        // rear centre (behind the ship)
        ship.x - ((ship.radius * 5) / 3) * Math.cos(ship.angle),
        ship.y + ((ship.radius * 5) / 3) * Math.sin(ship.angle)
      );
      ctx.lineTo(
        // rear right
        ship.x -
          ship.radius *
            ((2 / 3) * Math.cos(ship.angle) - 0.5 * Math.sin(ship.angle)),
        ship.y +
          ship.radius *
            ((2 / 3) * Math.sin(ship.angle) + 0.5 * Math.cos(ship.angle))
      );
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  } else {
    // Apply friction (slow the ship down when not thrusting).
    ship.thrust.x -= (FRICTION * ship.thrust.x) / FPS;
    ship.thrust.y -= (FRICTION * ship.thrust.y) / FPS;
  }
}

export function drawSpace(
  ctx: CanvasRenderingContext2D,
  height: number,
  width: number
): void {
  ctx.fillStyle = palette.greyScale.black;
  ctx.fillRect(0, 0, width, height);
}

export function drawScore(
  ctx: CanvasRenderingContext2D,
  score: number,
  width: number
): void {
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = palette.greyScale.white;
  ctx.font = `${FONT_SIZE}px ${FONT_TYPE}`;
  ctx.fillText(`Score: ${score.toString()}`, width - SHIP_SIZE / 2, SHIP_SIZE);
}

export function drawText(
  ctx: CanvasRenderingContext2D,
  text: string,
  textOpacity: number,
  height: number,
  width: number
): void {
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = `rgba(255, 255, 255, ${textOpacity})`;
  ctx.font = `small-caps ${FONT_SIZE}px ${FONT_TYPE}`;
  ctx.fillText(text, width / 2, height * 0.75);
}

export function moveAsteroids(
  asteroids: Asteroid[],
  height: number,
  width: number
): void {
  for (const asteroid of asteroids) {
    asteroid.x += asteroid.xv;
    asteroid.y += asteroid.yv;

    // Handle asteroid edge of screen.
    if (asteroid.x < 0 - asteroid.radius) {
      asteroid.x = width + asteroid.radius;
    }

    if (asteroid.x > width + asteroid.radius) {
      asteroid.x = 0 - asteroid.radius;
    }

    if (asteroid.y < 0 - asteroid.radius) {
      asteroid.y = height + asteroid.radius;
    }

    if (asteroid.y > height + asteroid.radius) {
      asteroid.y = 0 - asteroid.radius;
    }
  }
}

export function moveLasers(
  lasers: ILaser[],
  height: number,
  width: number
): void {
  for (let i: number = lasers.length - 1; i >= 0; i--) {
    // Check distance travelled.
    if (lasers[i].dist > 0.6 * width) {
      lasers.splice(i, 1);

      continue;
    }

    // Handle the explosion.
    if (lasers[i].explodeTime > 0) {
      lasers[i].explodeTime--;

      // Destroy the laser after the duration is up.
      if (lasers[i].explodeTime === 0) {
        lasers.splice(i, 1);

        continue;
      }
    } else {
      // Move the laser.
      lasers[i].x += lasers[i].xv;
      lasers[i].y += lasers[i].yv;

      // Calculate the distance travelled.
      lasers[i].dist += Math.sqrt(
        Math.pow(lasers[i].xv, 2) + Math.pow(lasers[i].yv, 2)
      );
    }

    // Handle the edge of screen.
    if (lasers[i].x < 0) {
      lasers[i].x = width;
    }

    if (lasers[i].x > width) {
      lasers[i].x = 0;
    }
    if (lasers[i].y < 0) {
      lasers[i].y = height;
    }

    if (lasers[i].y > height) {
      lasers[i].y = 0;
    }
  }
}
