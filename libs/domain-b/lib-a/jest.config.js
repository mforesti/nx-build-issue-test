module.exports = {
  name: 'domain-b-lib-a',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/domain-b/lib-a',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
