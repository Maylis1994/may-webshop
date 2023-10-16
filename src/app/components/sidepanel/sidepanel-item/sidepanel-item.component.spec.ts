import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidepanelItemComponent } from './sidepanel-item.component';

describe('SidepanelItemComponent', () => {
  let component: SidepanelItemComponent;
  let fixture: ComponentFixture<SidepanelItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidepanelItemComponent]
    });
    fixture = TestBed.createComponent(SidepanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
