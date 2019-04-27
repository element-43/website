// Constants.
import { FPS, SHIP_BLINK_DURATION, SHIP_SIZE } from '../constants';

// Types.
import { Entity } from '../types';

interface Laser {
  x: number;
  y: number;
  xv: number;
  yv: number;
  dist: number;
  explodeTime: number;
}

interface Thrust {
  x: number;
  y: number;
}

class Ship implements Entity {
  public angle: number;
  public blinkNum: number;
  public blinkTime: number;
  public canShoot: boolean;
  public dead: boolean;
  public explodeTime: number;
  public lasers: Laser[];
  public radius: number;
  public rotation: number;
  public thrusting: boolean;
  public thrust: Thrust;
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.angle = (90 / 180) * Math.PI; // convert to radians
    this.blinkNum = Math.ceil(3 / SHIP_BLINK_DURATION);
    this.blinkTime = Math.ceil(SHIP_BLINK_DURATION * FPS);
    this.canShoot = true;
    this.dead = false;
    this.explodeTime = 0;
    this.lasers = [];
    this.radius = SHIP_SIZE / 2;
    this.rotation = 0;
    this.thrusting = false;
    this.thrust = {
      x: 0,
      y: 0,
    };
    this.x = x;
    this.y = y;
  }

  shootLaser(): void {
    let laserSpeed: number; // Speed of lasers in pixels per second.

    if (this.canShoot && this.lasers.length < 10) {
      laserSpeed = 500;

      this.lasers.push({
        x: this.x + (4 / 3) * this.radius * Math.cos(this.angle),
        y: this.y - (4 / 3) * this.radius * Math.sin(this.angle),
        xv: (laserSpeed * Math.cos(this.angle)) / FPS,
        yv: (-laserSpeed * Math.sin(this.angle)) / FPS,
        dist: 0,
        explodeTime: 0,
      });
    }

    // Prevent further shooting.
    this.canShoot = false;
  }
}

export { Laser, Ship, Thrust };
