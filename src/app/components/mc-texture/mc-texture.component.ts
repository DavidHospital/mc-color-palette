import { Component, OnInit, Input } from '@angular/core';
import { McTexture } from 'src/app/types/mc-texture';

@Component({
  selector: 'mc-texture',
  templateUrl: './mc-texture.component.html',
  styleUrls: ['./mc-texture.component.scss']
})
export class McTextureComponent {

  @Input() mcTexture: McTexture;
  @Input() padding = 48;

  constructor() { }

}
