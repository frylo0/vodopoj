const importer = require('../webpack.importer');

const imported = importer([
  require.context('./Logic/', true, /\.js$/),
  require.context('./Attach/', true, /\./),
]);

import './Blocks/post/post';
import './Basic/button/button';
import './Blocks/menu/menu';
