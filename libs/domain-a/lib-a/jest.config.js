module.exports = {
  name: 'domain-a-lib-a',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/domain-a/lib-a',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
