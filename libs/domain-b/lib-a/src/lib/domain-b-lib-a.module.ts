import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedUtilAModule } from '@nx-issues/shared/util-a';

@NgModule({
  imports: [
    CommonModule,
    SharedUtilAModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ]
})
export class DomainBLibAModule {}
