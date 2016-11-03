/* eslint-env node */
module.exports = {
  name: 'ember-sinon-chai',

  options: {
    nodeAssets: {
      'sinon-chai': {
        import: [{ path: 'lib/sinon-chai.js', type: 'test' }]
      }
    }
  }
};
