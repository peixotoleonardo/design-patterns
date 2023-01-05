import { Checkbox } from "./checkbox";

export class WindowsCheckbox implements Checkbox {
  paint(): void {
    console.log('You have created Windows Checkbox');
  }
}
