import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { McTexture } from 'src/app/types/mc-texture';
import { McTextureService } from 'src/app/services/mc-texture/mc-texture.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mc-texture-list-view',
  templateUrl: './mc-texture-list-view.component.html',
  styleUrls: ['./mc-texture-list-view.component.scss']
})
export class McTextureListViewComponent implements AfterViewInit {

  _mcTextures: McTexture[];
  private _currentTextureSub: Subscription;

  displayedColumns = ["image", "name", "color"];

  constructor(private _mcTextureService: McTextureService) { }

  ngAfterViewInit(): void {
    this._currentTextureSub = this._mcTextureService.currentTexture.subscribe(mcTexture => {
      this._mcTextures = this._mcTextureService.searchTextureMap(mcTexture);
    });
  }

}
