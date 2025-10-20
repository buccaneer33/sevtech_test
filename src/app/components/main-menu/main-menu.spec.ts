import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMeny } from './main-meny';

describe('MainMeny', () => {
  let component: MainMeny;
  let fixture: ComponentFixture<MainMeny>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMeny]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainMeny);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
