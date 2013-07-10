Package.describe({
  summary: "A Rickshaw fork repackaged for Meteor"
});

Package.on_use(function (api, where) {
  api.use('meteor-d3', 'client')
  api.add_files('rickshaw/rickshaw.js', 'client');
  api.add_files('rickshaw/rickshaw.css', 'client');
});