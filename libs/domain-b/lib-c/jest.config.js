module.exports = {
  name: 'domain-b-lib-c',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/domain-b/lib-c',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
