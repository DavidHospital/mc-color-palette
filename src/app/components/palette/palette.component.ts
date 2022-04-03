import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { PaletteService } from 'src/app/services/palette/palette.service';
import { Harmony } from 'src/app/types/color-harmonies';
import { McTexture } from 'src/app/types/mc-texture';

@Component({
  selector: 'mc-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements AfterViewInit {

  _palette: McTexture[];

  constructor(private _paletteService: PaletteService,
              private _changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.randomPalette(Harmony.ANALAGOUS);
    this._changeDetectorRef.detectChanges();
  }

  randomPalette(harmony: Harmony) {
    this._palette = this._paletteService.getPalette(Math.floor(Math.random() * 255), harmony, 8, 8);
  }

}
