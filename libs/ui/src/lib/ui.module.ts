import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UiSharedModule} from '../../../ui-shared/ui-shared.module';

const EXPORTS = [
  HeaderComponent
]
@NgModule({
  imports: [
    CommonModule,
    UiSharedModule
  ],
  declarations: [...EXPORTS],
  exports: [...EXPORTS]
})
export class UiModule {}
