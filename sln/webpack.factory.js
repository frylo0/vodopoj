const fs = require('fs'),
  path = require('path');

/**
 * 
 * @param {Object} options options given to factory
 * @param {string} options.pagesSrc src of pages dirs folder
 */
function factory(options) {
  const targetModeString = process.argv.find(str => str.match(/^--mode=(?<mode>\w+)/));
  const mode = targetModeString ? targetModeString.match(/^--mode=(?<mode>\w+)/).groups.mode : 'development';

  const entries = {};
  const pageDirs = fs.readdirSync(options.pagesSrc);

  for (const pageDir of pageDirs) {
    const pageDirSrc = path.resolve(options.pagesSrc, pageDir);

    if (!fs.lstatSync(pageDirSrc).isDirectory()) continue;
    const files = fs.readdirSync(pageDirSrc);

    console.log(files);
    if (!files.some(file => file.endsWith('.pug'))) continue;

    const pageFilename = files.find(file => /\.pug$/.test(file)).replace(/\.pug$/, '');
    const pugPage = path.resolve(pageDirSrc, `${pageFilename}.pug`);
    entries[pageFilename] = [pugPage.replace(/\.pug$/, '.js'), pugPage.replace(/\.pug$/, '.sass')];
  }

  console.log('');

  return {
    mode: mode,
    entries,
  };
};

/**
 * @method exclude Excludes set of folders in each rule of config
 * @param {Array<string>} relativeExclude which folders to exclude in config.rules
 */
factory.exclude = (config, relativeExclude) => {
  const exclude = relativeExclude
    .map(src => path.resolve(__dirname, src));

  for (let rule in config.rules) {
    rule.exclude = exclude;
  }
};

function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
factory.objectMerge = function (target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        factory.objectMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return factory.objectMerge(target, ...sources);
};

module.exports = factory;