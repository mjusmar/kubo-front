import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogShoppingCartComponent } from 'src/app/components/dialog-shopping-cart/dialog-shopping-cart.component';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  qtyProdAdded = 0;

  constructor(
    public _matDialog: MatDialog,
    public dialogRef: MatDialogRef<DialogShoppingCartComponent>,
    public globalService: GlobalService
  ) { }

  
  ngOnInit(): void {
  }

  test(){
    this.dialogRef = this._matDialog.open(DialogShoppingCartComponent, {
      panelClass: "crud-label-dialog",
      width: "450px",
      height: "80vh",
      // data: currentData,
    });

  }
}
