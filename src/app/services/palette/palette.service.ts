import { Injectable } from '@angular/core';
import { McTextureService } from 'src/app/services/mc-texture/mc-texture.service';
import { McTexture, getPrimaryHue } from 'src/app/types/mc-texture';
import { Harmony } from 'src/app/types/color-harmonies';

@Injectable({
  providedIn: 'root'
})
export class PaletteService {

  constructor(private _mcTextureService: McTextureService) { }

  public getPalette(base: McTexture, harmony: Harmony, epsilon: number): McTexture[] {
    let textures = [];
    harmony.hueAngles.forEach(angle => {
      let primaryColor: number = getPrimaryHue(base) + angle;
      let minColor = primaryColor - epsilon;
      let maxColor = primaryColor + epsilon;
      for (let i = minColor; i <= maxColor; i ++) {
        let hue = i % 255;
        textures.push(... this._mcTextureService.searchTextureMapByHue(hue));
      }
    });
    return textures;
  }

  public getPaletteFromColor(color: number[], harmony: Harmony, epsilon: number): McTexture[] {
    let textures = [];
    harmony.hueAngles.forEach(angle => {
      let minColor = color[0] - epsilon;
      let maxColor = color[0] + epsilon;
      for (let i = minColor; i <= maxColor; i ++) {
        let hue = i % 255;
        textures.push(... this._mcTextureService.searchTextureMapByHue(hue));
      }
    });
    return textures;
  }
}
