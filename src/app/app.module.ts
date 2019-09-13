import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AlertDialogComponent} from './alert-dialog/alert-dialog.component';

import {AppComponent} from './app.component';
import {DialogComponent} from './dialog/dialog.component';
import {FooDialogComponent} from './foo-dialog/foo-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    FooDialogComponent,
    AlertDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
