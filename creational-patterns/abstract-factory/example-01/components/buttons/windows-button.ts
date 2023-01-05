import { Button } from "./button";

export class WindowsButton implements Button {
  paint(): void {
    console.log('You have created WindowsButton');
  }
}
