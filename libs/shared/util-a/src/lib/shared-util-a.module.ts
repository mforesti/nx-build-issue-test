import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUtilBModule } from '@nx-issues/shared/util-b';

@NgModule({
  imports: [CommonModule, SharedUtilBModule]
})
export class SharedUtilAModule {}
