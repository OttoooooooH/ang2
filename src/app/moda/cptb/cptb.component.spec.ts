import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CptbComponent } from './cptb.component';

describe('CptbComponent', () => {
  let component: CptbComponent;
  let fixture: ComponentFixture<CptbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CptbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CptbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
