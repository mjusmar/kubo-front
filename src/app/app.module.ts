import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon'
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogShoppingCartComponent } from './components/dialog-shopping-cart/dialog-shopping-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    NgbModule,
    FlexLayoutModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    // BrowserAnimationsModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {hasBackdrop: false}
    },
    // {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  entryComponents: [DialogShoppingCartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
