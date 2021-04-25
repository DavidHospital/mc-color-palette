import { Component, Input } from '@angular/core';
import { McTexture, getHexFromHsl, getPrimaryColor } from 'src/app/types/mc-texture';

@Component({
  selector: 'mc-texture',
  templateUrl: './mc-texture.component.html',
  styleUrls: ['./mc-texture.component.scss']
})
export class McTextureComponent {
  getHexFromHsl = getHexFromHsl;
  getPrimaryColor = getPrimaryColor;

  @Input() mcTexture: McTexture;
  @Input() size = 200;
  @Input() padding = 48;
  @Input() showBackground = true;
}
