import { Injectable } from '@angular/core';
import { McTexture } from 'src/app/types/mc-texture';

import Vibrant = require('node-vibrant');

const IMAGE_PATH = './assets/mc-textures';

@Injectable({
  providedIn: 'root'
})
export class McTextureService {

  private _assetsCache: { [key: string]: McTexture } = {};

  getMcTexture(key: string, fileExtension: string = 'png'): Promise<McTexture> {
    if (this._assetsCache[key]) {
      return Promise.resolve(this._assetsCache[key]);
    }
    const fileFull = `${IMAGE_PATH}/${key}.${fileExtension}`;
    return Vibrant.from(`${IMAGE_PATH}/${key}.${fileExtension}`).getPalette().then(palette => {
      return this._assetsCache[key] = {
        name: key,
        imgSrc: fileFull,
        palette: palette
      };
    }).catch(err => {
      console.error(`Error while generating colors for file ${fileFull}. Error: ${err}`);
      throw err;
    });
  }
}
