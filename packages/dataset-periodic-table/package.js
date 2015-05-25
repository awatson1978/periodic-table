Package.describe({
  name: 'starrynight:dataset-periodic-table',
  version: '0.0.1',

  // Brief, one-line summary of the package.
  summary: 'Dataset of atomic elements for use in a periodic table.',

  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/awatson1978/meteor-cookbook/tree/master/examples/periodic-table',

  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
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
