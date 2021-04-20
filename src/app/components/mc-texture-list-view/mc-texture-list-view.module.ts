import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatTableModule } from "@angular/material/table";
import { FlexLayoutModule } from "@angular/flex-layout";
import { McTextureModule } from "../mc-texture/mc-texture.module";
import { McTextureListViewComponent } from "./mc-texture-list-view.component";

@NgModule({
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatTableModule,
    McTextureModule,
  ],
  declarations: [
    McTextureListViewComponent,
  ],
  exports: [
    McTextureListViewComponent,
  ]
})
export class McTextureListViewModule { }
