import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogTileComponent } from './dog-tile.component';

describe('DogTileComponent', () => {
  let component: DogTileComponent;
  let fixture: ComponentFixture<DogTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
