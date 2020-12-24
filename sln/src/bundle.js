const importer = require('../webpack.importer');

const imported = importer([
  require.context('./Logic/', true, /\.js$/),
  //require.context('./Attach/', true, /\./),
]);

import './Basic/devicer/devicer';
import './Basic/input/input';
import './Basic/button/button';
import './Basic/link/link';
import './Blocks/panel-main/panel-main';
import './Blocks/panel-nav/panel-nav';
