import { NgModule } from '@angular/core';

//primeNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

import {MenubarModule} from 'primeng/menubar';


@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
