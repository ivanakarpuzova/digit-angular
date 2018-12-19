import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DogService } from '../find-dog/dog.service';
import { Router } from '@angular/router';
enum Status {
  adopted = 0,
  homeless = 1
}

enum Gender {
  male = 0,
  female = 1
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.sass']
})


export class ReportComponent implements OnInit {
  Status = Status;
  Gender = Gender;
  reportForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dogService: DogService, private router: Router) { }

  ngOnInit() {
    this.reportForm = this.formBuilder.group({
      id: [],
      status: [null],
      code: ['', Validators.required],
      size: ['', Validators.required],
      gender: [null, Validators.required],
      location: [''],
      breed: [''],
      description: [''],
      image: [''],
    });
  }

  
  reportDog():void{
    let dog = {
      id: 0,
      status: this.reportForm.controls.status.value === Status.adopted ? 'adopted' : 'homeless',
      code: this.reportForm.controls['code'].value,
      size: this.reportForm.controls['size'].value,
      gender: this.reportForm.controls['gender'].value === Gender.male ? 'male' : 'female',
      location: this.reportForm.controls['location'].value,
      breed: this.reportForm.controls['breed'].value,
      description: this.reportForm.controls['description'].value,
      imageUrl: this.reportForm.controls['image'].value,

    }
    // console.log(dog);
    console.log(status);

    this.dogService.addDog(dog);
    this.router.navigate(["/find"]);
    
  }

}
