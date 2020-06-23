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

  private _loading: Promise<any>;
  get loading() {
    return this._loading;
  }

  constructor() {
    this._generateMcTextures();
  }

  public getMcTexture(key: string): McTexture {
    return this._assetsCache[key];
  }

  // public getHarmoniousMcTextures(key: string, harmony: Harmony): Promise<McTexture[]> {
  //   return this.getMcTexture(key).then(mcTexture => {
  //     const hues = mcTexture.hues;
  //     if (hues?.length === 0) {
  //       return [];
  //     }
  //     Object.keys(this._assetsCache).forEach(key => {
  //       const other = this._assetsCache[key];
  //       const otherHues = other.hues;

        
  //     });
  //   });
  // }

  public getSimpleName(key: string) {
    return key.replace( /(_)/g, " $1" );
  }

  private _generateMcTextures() {
    // this._loading = Promise.all(
    //   MC_TEXTURE_NAMES.map(key => this._generateMcTexture(key))
    // ).then(() => {
    //   console.log("done");
    // });

    this._assetsCache = data;
  }

  // private _generateMcTexture(key: string, fileExtension: string = 'png'): Promise<void> {
  //   const fileFull = `${IMAGE_PATH}/${key}.${fileExtension}`;
  //   return new Promise((resolve, reject) => {
  //     Vibrant.from(`${IMAGE_PATH}/${key}.${fileExtension}`).getPalette().then(palette => {
  //       console.log(`Generated palette for file ${fileFull}`);
  //       this._assetsCache[key] = new McTexture(
  //         key,
  //         fileFull,
  //         palette,
  //       );
  //       resolve();
  //     }).catch(err => {
  //       console.error(`Error while generating colors for file ${fileFull}. Error: ${err}`);
  //       reject(err);
  //     });
  //   });
  // }
}
