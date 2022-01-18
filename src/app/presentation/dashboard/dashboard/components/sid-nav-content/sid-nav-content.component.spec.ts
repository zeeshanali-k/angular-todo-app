import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidNavContentComponent } from './sid-nav-content.component';

describe('SidNavContentComponent', () => {
  let component: SidNavContentComponent;
  let fixture: ComponentFixture<SidNavContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidNavContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidNavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
