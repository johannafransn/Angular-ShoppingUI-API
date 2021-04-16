import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-popup.component.html',
  styleUrls: ['./details-popup.component.css']
})
export class DetailsPopupComponent implements OnInit {

  //Data will be taken into the popup dialog
  constructor(public dialogRef: MatDialogRef<DetailsPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }


  //Close the dialog and go back to main shopping
  closeDialog(){
    this.dialogRef.close("Now closed");
  }

}
