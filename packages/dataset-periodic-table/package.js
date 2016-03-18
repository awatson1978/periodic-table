Package.describe({
  name: 'starrynight:dataset-periodic-table',
  version: '0.0.1',
  summary: 'Dataset of atomic elements for use in a periodic table.',
  git: 'https://github.com/awatson1978/meteor-cookbook/tree/master/examples/periodic-table',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('dataset-periodic-table.js', "server");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('starrynight:dataset-periodic-table');
  api.addFiles('dataset-periodic-table-tests.js');
});
