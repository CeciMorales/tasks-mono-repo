import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

const EXPORTS = [
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [...EXPORTS]
  ],
  exports: [
    [...EXPORTS]
  ]
})
export class UiSharedModule { }
