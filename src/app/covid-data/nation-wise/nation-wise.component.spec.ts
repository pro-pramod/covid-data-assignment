import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationWiseComponent } from './nation-wise.component';

describe('NationWiseComponent', () => {
  let component: NationWiseComponent;
  let fixture: ComponentFixture<NationWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationWiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
