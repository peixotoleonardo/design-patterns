import { Checkbox } from "./checkbox";

export class MacOSCheckbox implements Checkbox {
  paint(): void {
    console.log('You have created MacOS Checkbox');
  }
}
