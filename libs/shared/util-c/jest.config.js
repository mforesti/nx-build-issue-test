module.exports = {
  name: 'shared-util-c',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/util-c',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
