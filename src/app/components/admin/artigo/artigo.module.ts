import { NgModule } from '@angular/core';

import { ArtigoRoutingModule } from './artigo-routing.module';
import { ArtigoComponent } from './artigo.component';
import { ComumModule } from '../../../modules/comum.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ArtigoComponent],
  imports: [
    ComumModule,
    ReactiveFormsModule,
    ArtigoRoutingModule
  ]
})
export class ArtigoModule { }
