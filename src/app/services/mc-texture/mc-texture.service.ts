import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { McTexture, getPrimaryHue, getFriendlyName } from 'src/app/types/mc-texture';

import * as data from 'src/assets/textures-data.json';
import * as textureMap from 'src/assets/texture-color-maps.json';

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

    // Returns list of texture names which match to the search string
    public searchTextureByName(searchString: string): string[] {
        const terms = searchString.toLowerCase().split(' ');
        return Object.keys(this._assetsCache).filter(key => {
            key = key.toLowerCase();
            return terms.every(term => key.includes(term));
        });
    }

    public searchTextureMap(base: McTexture): McTexture[] {
        return textureMap[getPrimaryHue(base)].map(name => this.getMcTexture(name));
    }

    /**
     * Get all textures with a given primary hue
     * @param hue Primary hue of textures to get
     * @returns List of McTexture
     */
    public searchTextureMapByHue(hue: number): McTexture[] {
        let t = textureMap[hue];
        if (!t) return [];
        return t.map(name => this.getMcTexture(name));
    }

    private _loadMcTextures() {
        this._assetsCache = data;
        Object.keys(this._assetsCache).forEach(key => {
            this._assetsCache[key].friendlyName = getFriendlyName(this._assetsCache[key]);
        })
    }

}
