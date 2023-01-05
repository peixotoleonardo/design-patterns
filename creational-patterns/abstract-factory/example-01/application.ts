import { Button } from "./components/buttons";
import { Checkbox } from "./components/checkboxes";
import { GUIFactory } from "./components/factories/gui.factory";

export class Application {
  private button: Button;
  private checkbox: Checkbox;

  constructor(factory: GUIFactory) {
    this.button = factory.makeButton();
    this.checkbox = factory.makeCheckbox();
  }

  paint() {
    this.button.paint();
    this.checkbox.paint();
  }
}
