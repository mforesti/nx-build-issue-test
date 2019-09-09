import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DomainALibAModule } from '@nx-issues/domain-a/lib-a';
import { DomainBLibAModule } from '@nx-issues/domain-b/lib-a';
import { DomainBLibCModule } from '@nx-issues/domain-b/lib-c';
import { DomainBLibDModule } from '@nx-issues/domain-b/lib-d';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DomainALibAModule,
    DomainBLibAModule,
    DomainBLibCModule,
    DomainBLibDModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
