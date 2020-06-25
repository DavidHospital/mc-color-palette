import { Injectable } from '@angular/core';
import { McTexture } from 'src/app/types/mc-texture';

import Vibrant = require('node-vibrant');
import { MC_TEXTURE_NAMES } from 'src/app/file-keys';
import { Harmony } from 'src/app/types/color-harmonies';
import * as data from 'src/assets/textures-data.json';

const IMAGE_PATH = './assets/mc-textures';

@Injectable({
  providedIn: 'root'
})
export class McTextureService {

  private _assetsCache: { [key: string]: McTexture } = {};

  constructor() {
    this._loadMcTextures();
  }

  public getMcTexture(key: string): McTexture {
    return this._assetsCache[key];
  }

  private _loadMcTextures() {
    this._assetsCache = data;
  }
  
}
