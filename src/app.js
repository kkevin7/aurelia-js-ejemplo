import { PLATFORM } from "aurelia-framework";

export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia Router';

    const handleUnknownRoutes = (instruction) => {
      return { route: 'error404', moduleId: PLATFORM.moduleName('errores/error404') };
    }

    config.mapUnknownRoutes(handleUnknownRoutes);

    config.map([
      {route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('home/index'), title: 'Home'},
      { route: 'ejemplo1', name: 'ejemplo1', moduleId:  PLATFORM.moduleName('ejemplo1/ejemplo1'), nav: true, title: 'ejemplo1' },
      { route: 'params/:palabra',  moduleId: PLATFORM.moduleName('params/params'), name:'params' },
      { route: 'ejemplo2', name: 'ejemplo2', moduleId:  PLATFORM.moduleName('ejemplo2/ejemplo2'), nav: true, title: 'ejemplo2' },
    ]);
  }
}
