import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { McTexture } from 'src/app/types/mc-texture';
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

  _mcTextures: McTexture[];
  private _currentTextureSub: Subscription;

  displayedColumns = ["image", "name", "color"];

  constructor(private _mcTextureService: McTextureService,
              private _paletteService: PaletteService) { }

  ngAfterViewInit(): void {
    this._currentTextureSub = this._mcTextureService.currentTexture.subscribe(mcTexture => {
      this._mcTextures = this._paletteService.getPalette(mcTexture, Harmony.COMPLEMENTARY, 8);
    });
  }

}
