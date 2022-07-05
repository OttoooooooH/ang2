import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CptcComponent } from './cptc.component';

describe('CptcComponent', () => {
  let component: CptcComponent;
  let fixture: ComponentFixture<CptcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CptcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CptcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
