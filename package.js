Package.describe({
  name: 'zephadias:threejs',
  summary: 'Three.js meteor package',
  version: '1.0.0',
  git: 'https://github.com/Zephadias/meteor-threejs'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('./lib/three.js', 'client');
});
