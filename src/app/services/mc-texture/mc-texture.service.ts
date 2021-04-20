import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { McTexture } from 'src/app/types/mc-texture';

import { MC_TEXTURE_NAMES } from 'src/app/file-keys';
import { Harmony } from 'src/app/types/color-harmonies';
import * as data from 'src/assets/textures-data.json';
import * as textureMap from 'src/assets/texture-color-maps.json';

const IMAGE_PATH = './assets/mc-textures';

@Injectable({
    providedIn: 'root'
})
export class McTextureService {

    private _assetsCache: { [key: string]: McTexture } = {};

    private _currentTexture = new BehaviorSubject<McTexture>(undefined);
    get currentTexture(): Observable<McTexture> {
        return this._currentTexture.asObservable();
    }

    constructor() {
        this._loadMcTextures();
    }

    public getMcTexture(key: string): McTexture {
        return this._assetsCache[key];
    }

    public setCurrentTexture(texture: McTexture) {
        this._currentTexture.next(texture);
    }

    public searchTextureMap(base: McTexture): McTexture[] {
        return textureMap[base.colors[0][0]].map(name => this.getMcTexture(name));
    }

    public searchTextureMapByHue(hue: number): McTexture[] {
        let t = textureMap[hue];
        if (!t) return [];
        return t.map(name => this.getMcTexture(name));
    }

    private _loadMcTextures() {
        this._assetsCache = data;
    }

}
