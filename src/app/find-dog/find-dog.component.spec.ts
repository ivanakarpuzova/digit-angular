import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDogComponent } from './find-dog.component';

describe('FindDogComponent', () => {
  let component: FindDogComponent;
  let fixture: ComponentFixture<FindDogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
