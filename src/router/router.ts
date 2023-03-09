import { Router } from 'express';
import apiRoutes from './apiRoutes';

export default  class RouteLoader {
  private apiRouters: any[];
  private route: Router;
  constructor() {
    this.route = Router();
    this.apiRouters = apiRoutes;
  }

  public loadRoutes(): Router {
    this.apiRouters.map(route => {
      const hasRouter = this.loadRoutersMethods(route);

      if (hasRouter) return hasRouter;

      return undefined;
    })

    return this.route;
  }

  public loadRoutersMethods(route: any) {
    const methodsRoutes = {
      'GET': this.route.get(route.path, route.handler),
      'POST': this.route.post(route.path, route.handler),
      'DELETE': this.route.delete(route.path, route.handler),
    }

    return  methodsRoutes[route.method];
  }
}
