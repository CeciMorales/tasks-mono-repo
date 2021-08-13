import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TasksModule } from '@tasks-app/tasks';
import { UiModule } from '@tasks-app/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    TasksModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
