import { Button } from '../buttons';
import { Checkbox } from '../checkboxes';

export interface GUIFactory {
  makeButton(): Button;
  makeCheckbox(): Checkbox;
}
