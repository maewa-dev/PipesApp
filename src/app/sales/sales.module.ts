import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { UncommonComponent } from './pages/uncommon/uncommon.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortComponent } from './pages/sort/sort.component';



@NgModule({
  declarations: [
    NumbersComponent,
    UncommonComponent,
    BasicsComponent,
    SortComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumbersComponent,
    UncommonComponent,
    BasicsComponent,
    SortComponent
  ]
})
export class SalesModule { }
