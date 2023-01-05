import { GUIFactory } from './gui.factory';
import { Button, MacOSButton } from '../buttons';
import { Checkbox, MacOSCheckbox } from '../checkboxes';

export class MacOSFactory implements GUIFactory {
  makeButton(): Button {
    return new MacOSButton();
  }

  makeCheckbox(): Checkbox {
    return new MacOSCheckbox();
  }
}
