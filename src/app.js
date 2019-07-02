import { PLATFORM } from "aurelia-framework";

export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia Router';

    const handleUnknownRoutes = (instruction) => {
      return { route: 'error404', moduleId: PLATFORM.moduleName('errores/error404.html') };
    }

    config.mapUnknownRoutes(handleUnknownRoutes);

    config.map([
      {route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('home/index'), title: 'Home'},
      { route: 'ejemplo1', name: 'ejemplo1', moduleId:  PLATFORM.moduleName('ejemplo1/ejemplo1'), nav: true, title: 'ejemplo1' },
      { route: 'post/:palabra',  moduleId: PLATFORM.moduleName('post/post'), name:'post' }
    ]);
  }
}
