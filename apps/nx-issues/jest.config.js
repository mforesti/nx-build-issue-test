module.exports = {
  name: 'nx-issues',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nx-issues',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
