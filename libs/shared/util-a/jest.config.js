module.exports = {
  name: 'shared-util-a',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/util-a',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
