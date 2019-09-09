module.exports = {
  name: 'domain-a-lib-b',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/domain-a/lib-b',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
