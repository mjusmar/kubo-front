import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon'
import {MatDialogModule, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ComponentsModule } from '../components/components.module';
import { DialogShoppingCartComponent } from '../components/dialog-shopping-cart/dialog-shopping-cart.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports:[
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    ComponentsModule
  ],
  providers: [
		MatDialog,
    // MatDialogRef
	],
  // entryComponents: [DialogShoppingCartComponent]
})
export class SharedModule { }
