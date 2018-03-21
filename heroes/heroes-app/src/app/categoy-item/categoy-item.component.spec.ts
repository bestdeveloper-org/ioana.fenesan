import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoyItemComponent } from './categoy-item.component';

describe('CategoyItemComponent', () => {
  let component: CategoyItemComponent;
  let fixture: ComponentFixture<CategoyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
