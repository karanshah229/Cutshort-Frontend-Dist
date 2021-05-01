import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavRecentlyViewedComponent } from './sidenav-recently-viewed.component';

describe('SidenavRecentlyViewedComponent', () => {
  let component: SidenavRecentlyViewedComponent;
  let fixture: ComponentFixture<SidenavRecentlyViewedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavRecentlyViewedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavRecentlyViewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
