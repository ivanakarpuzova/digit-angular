import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { IDog } from '../find-dog/dog';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.sass']
})
export class DogDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public dog: IDog,
             public dialog: MatDialog ) { }

  ngOnInit() {
  }

}
