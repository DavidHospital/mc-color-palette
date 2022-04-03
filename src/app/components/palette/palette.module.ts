import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { McTextureModule } from '../mc-texture/mc-texture.module';
import { PaletteComponent } from './palette.component';

@NgModule({
  imports: [
    BrowserModule,
    FlexLayoutModule,
    McTextureModule,
  ],
  declarations: [
    PaletteComponent,
  ],
  exports: [
    PaletteComponent,
  ]
})
export class PaletteModule { }
