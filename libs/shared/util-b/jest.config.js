module.exports = {
  name: 'shared-util-b',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/util-b',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
