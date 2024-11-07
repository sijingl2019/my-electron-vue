import { app } from '@electron/remote';
import path from 'path';

const appPath = app.getPath('userData');

const PLUGIN_INSTALL_DIR = path.join(appPath, './qiko-plugins-new');
const PLUGIN_HISTORY = 'qiko-local-start-app';

export { PLUGIN_INSTALL_DIR, PLUGIN_HISTORY };
