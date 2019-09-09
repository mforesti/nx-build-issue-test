import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedUtilBModule } from '@nx-issues/shared/util-b';

@NgModule({
  imports: [
    CommonModule,
    SharedUtilBModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ]
})
export class DomainALibAModule {}
