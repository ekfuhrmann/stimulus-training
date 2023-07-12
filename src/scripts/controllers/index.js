import { Application } from "@hotwired/stimulus";
import StimulusControllerResolver from "stimulus-controller-resolver";

const application = Application.start();

StimulusControllerResolver.install(
  application,
  async (controllerName) =>
    (await import(`./${controllerName}_controller.js`)).default
);
