function importAll(req) {
  let targets = {};
  req.keys().forEach(item => { targets[item.replace('./', '')] = req(item); });
  //console.log('targets', targets);
  return targets;
}

function importer(fileImports) {
  const imported = [];
  for (let req of fileImports) {
    imported.push(importAll(req));
  }

  return imported;
}

module.exports = importer;