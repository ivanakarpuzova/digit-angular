import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DogService } from '../find-dog/dog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.sass']
})
export class ReportComponent implements OnInit {
  reportForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private dogService: DogService, private router: Router) { }

  ngOnInit() {
    this.reportForm = this.formBuilder.group({
      id: [],
      status: [''],
      code: [''],
      size: [''],
      gender: [''],
      location: [''],
      breed: [''],
      description: [''],
      image: [''],
    });
  }

  
  reportDog():void{
    let dog = {
      id: 0,
      status: this.reportForm.controls['status'].value,
      code: this.reportForm.controls['code'].value,
      size: this.reportForm.controls['size'].value,
      gender: this.reportForm.controls['gender'].value,
      location: this.reportForm.controls['location'].value,
      breed: this.reportForm.controls['breed'].value,
      description: this.reportForm.controls['description'].value,
      imageUrl: this.reportForm.controls['image'].value,

    }
    console.log(dog);

    this.dogService.addDog(dog);
    this.router.navigate(["/find"]);
    
  }

}
