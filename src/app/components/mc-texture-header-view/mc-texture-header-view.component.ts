import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef } from "@angular/core";
import { McTexture, getHexFromHsl } from "src/app/types/mc-texture";
import { McTextureService } from "src/app/services/mc-texture/mc-texture.service";
import { Swatch } from "node-vibrant/lib/color";
import { FormGroup, FormControl } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'mc-texture-header-view',
  templateUrl: './mc-texture-header-view.component.html',
  styleUrls: ['./mc-texture-header-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class McTextureHeaderViewComponent {
  getHexFromHsl = getHexFromHsl;
  
  @Input() set mcTextureKey(mcTextureKey) {
    this._formGroup.setValue({ block: mcTextureKey });
    const mcTexture = this._mcTextureService.getMcTexture(mcTextureKey);
    if (mcTexture) {
      this._mcTexture = mcTexture;
      this._dataSource.data = this._mcTexture.colors;
      this._mcTextureService.setCurrentTexture(mcTexture);
      this._changeDetectorRef.detectChanges();
    }
  };

  _mcTexture: McTexture;
  _dataSource = new MatTableDataSource<number[]>(); 

  _displayedColumns: string[] = ['COLOR', 'HSL'];

  _formGroup = new FormGroup({
    block: new FormControl('')
  });

  constructor(
      private _mcTextureService: McTextureService,
      private _changeDetectorRef: ChangeDetectorRef) {
  }
  
  onSubmit() {
    this.mcTextureKey = this._formGroup.value.block;
  }
}
