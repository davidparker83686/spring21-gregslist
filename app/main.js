import CarsController from "./Controllers/CarsController.js";
import JobsController from "./Controllers/JobsController.js"
import HousesController from "./Controllers/HousesController.js"

class App {
  carsController = new CarsController();
  housesController = new HousesController();
  jobsController = new JobsController
}

window["app"] = new App();
