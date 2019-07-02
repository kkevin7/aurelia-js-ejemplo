import { PLATFORM } from "aurelia-framework";

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia Router Demo';
    config.map([
      {route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('home/index.html')},
      { route: 'ejemplo1', name: 'ejemplo1', moduleId:  PLATFORM.moduleName('ejemplo1/ejemplo1.html'), nav: true, title: 'ejemplo1' }
    ]);
    this.router = router;
  }
}
