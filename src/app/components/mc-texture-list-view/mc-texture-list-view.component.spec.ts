import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McTextureListViewComponent } from './mc-texture-list-view.component';

describe('McTextureListViewComponent', () => {
  let component: McTextureListViewComponent;
  let fixture: ComponentFixture<McTextureListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McTextureListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McTextureListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
