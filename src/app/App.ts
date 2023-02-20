import express, { Application } from 'express';

import RouteLoader from '../router/router';

export default class AppManager {
  public express: Application;
  public routerLoader: RouteLoader;

  constructor() {
    this.express = express();
    this.routerLoader = new RouteLoader();

    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
  }

  private routes(): void {
    console.log('oiioio')
     this.express.use(this.routerLoader.loadRoutes());
  }
}
