import { Injectable } from '@angular/core';
import { McTextureService } from 'src/app/services/mc-texture/mc-texture.service';
import { McTexture, getPrimaryHue } from 'src/app/types/mc-texture';
import { Harmony } from 'src/app/types/color-harmonies';
import arrayShuffle from 'array-shuffle';

@Injectable({
  providedIn: 'root'
})
export class PaletteService {

  constructor(private _mcTextureService: McTextureService) { }

  
  /**
   * Get a random n-sized palette from a hue, harmony, and epsilon
   * @param hue Base hue of the palette
   * @param harmony Harmony to build the palette from
   * @param epsilon range (in each direction) of hue to accept textures for at each harmony angle
   * @param n number of textures to return in the palette
   * @returns List of McTexture
   */
  public getPalette(hue: number, harmony: Harmony, epsilon: number, n: number): McTexture[] {
    return arrayShuffle(this.getFullPaletteFromHue(hue, harmony, epsilon)).slice(0, n);
  }


  /**
   * Get a palette of all textures given a hue, harmony, and epsilon
   * @param hue Base hue of the palette
   * @param harmony Harmony to build the palette from
   * @param epsilon range (in each direction) of hue to accept textures for at each harmony angle
   * @returns List of McTexture
   */
  public getFullPaletteFromHue(hue: number, harmony: Harmony, epsilon: number): McTexture[] {
    let textures = [];
    harmony.hueAngles.forEach(angle => {
      let minColor = hue + angle - epsilon;
      let maxColor = hue + angle + epsilon;
      for (let i = minColor; i <= maxColor; i ++) {
        let _hue = i % 255;
        textures.push(... this._mcTextureService.searchTextureMapByHue(_hue));
      }
    });
    return textures;
  }
}
