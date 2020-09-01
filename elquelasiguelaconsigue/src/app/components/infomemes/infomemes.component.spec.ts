import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomemesComponent } from './infomemes.component';

describe('InfomemesComponent', () => {
  let component: InfomemesComponent;
  let fixture: ComponentFixture<InfomemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfomemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
