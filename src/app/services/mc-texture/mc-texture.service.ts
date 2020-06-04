import { Injectable } from '@angular/core';

const Vibrant = require('node-vibrant');

@Injectable({
  providedIn: 'root'
})
export class McTextureService {

  private _assets = [];
  get assets() {
    return this._assets;
  }

  constructor() {

    Vibrant.from('src/assets/mc-textures/brain-coral-block.png').getPalette((err, palette) => {
      console.log(palette);
      this._assets.push(palette);
    });
   }
}
