import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveredCasesComponent } from './recovered-cases.component';

describe('RecoveredCasesComponent', () => {
  let component: RecoveredCasesComponent;
  let fixture: ComponentFixture<RecoveredCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoveredCasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoveredCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
