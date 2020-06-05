import { NgModule } from "@angular/core";
import { McTextureComponent } from "./mc-texture.component";
import { BrowserModule } from "@angular/platform-browser";
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    BrowserModule,
    FlexLayoutModule,
  ],
  declarations: [
    McTextureComponent,
  ],
  exports: [
    McTextureComponent,
  ]
})
export class McTextureModule {}