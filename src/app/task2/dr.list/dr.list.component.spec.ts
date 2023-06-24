import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrListComponent } from './dr.list.component';

describe('DrListComponent', () => {
  let component: DrListComponent;
  let fixture: ComponentFixture<DrListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrListComponent]
    });
    fixture = TestBed.createComponent(DrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
