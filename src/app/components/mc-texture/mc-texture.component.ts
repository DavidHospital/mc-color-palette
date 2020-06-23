import { Component, Input } from '@angular/core';
import { McTexture, getHexFromHsl } from 'src/app/types/mc-texture';

@Component({
  selector: 'mc-texture',
  templateUrl: './mc-texture.component.html',
  styleUrls: ['./mc-texture.component.scss']
})
export class McTextureComponent {
  getHexFromHsl = getHexFromHsl;

  @Input() mcTexture: McTexture;
  @Input() padding = 48;
}
