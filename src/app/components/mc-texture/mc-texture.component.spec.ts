import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McTextureComponent } from './mc-texture.component';

describe('McTextureComponent', () => {
  let component: McTextureComponent;
  let fixture: ComponentFixture<McTextureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McTextureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McTextureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
