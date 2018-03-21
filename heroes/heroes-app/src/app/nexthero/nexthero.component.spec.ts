import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextheroComponent } from './nexthero.component';

describe('NextheroComponent', () => {
  let component: NextheroComponent;
  let fixture: ComponentFixture<NextheroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextheroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
