import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerActivityListComponent } from './volunteer-activity-list.component';

describe('VolunteerActivityListComponent', () => {
  let component: VolunteerActivityListComponent;
  let fixture: ComponentFixture<VolunteerActivityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerActivityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerActivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
