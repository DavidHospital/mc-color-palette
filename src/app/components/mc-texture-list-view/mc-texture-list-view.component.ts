import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { McTexture, getPrimaryHue, collisionScore } from 'src/app/types/mc-texture';
import { McTextureService } from 'src/app/services/mc-texture/mc-texture.service';
import { Harmony } from 'src/app/types/color-harmonies';
import { Subscription } from 'rxjs';
import { PaletteService } from 'src/app/services/palette/palette.service';

@Component({
  selector: 'mc-texture-list-view',
  templateUrl: './mc-texture-list-view.component.html',
  styleUrls: ['./mc-texture-list-view.component.scss']
})
export class McTextureListViewComponent implements AfterViewInit {

  getPrimaryHue = getPrimaryHue;

  _mcTextures: McTexture[];
  _sortedTextures: McTexture[];

  private _currentTextureSub: Subscription;
  private _mcTexture: McTexture;

  displayedColumns = ["image", "name", "color"];

  constructor(private _mcTextureService: McTextureService,
              private _paletteService: PaletteService) { }

  ngAfterViewInit(): void {
    this._currentTextureSub = this._mcTextureService.currentTexture.subscribe(mcTexture => {
      this._mcTexture = mcTexture;
      this._mcTextures = this._paletteService.getPalette(mcTexture, Harmony.COMPLEMENTARY, 8);
      this._sortedTextures = this._mcTextures.sort((a,b) => {
        return collisionScore(a, this._mcTexture) < collisionScore(b, this._mcTexture) ? -1 : 1
      });
    });
  }

}
