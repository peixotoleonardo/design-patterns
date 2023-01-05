import { GUIFactory } from './gui.factory';
import { Button, WindowsButton } from '../buttons';
import { Checkbox, WindowsCheckbox } from '../checkboxes';

export class WindowsFactory implements GUIFactory {
  makeButton(): Button {
    return new WindowsButton();
  }

  makeCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}
