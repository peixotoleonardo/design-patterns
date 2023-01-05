import { Application } from './application';
import { MacOSFactory } from './components/factories/mac-os.factory';
import { WindowsFactory } from './components/factories/windows.factory';

const appWindows = new Application(new WindowsFactory());
const appMacOS = new Application(new MacOSFactory());

appMacOS.paint();
appWindows.paint();
