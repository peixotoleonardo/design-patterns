import { Button } from './button';

export class MacOSButton implements Button {
  paint(): void {
    console.log('You have created MacOSButton.');
  }
}