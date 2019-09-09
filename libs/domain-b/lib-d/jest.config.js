module.exports = {
  name: 'domain-b-lib-d',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/domain-b/lib-d',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
