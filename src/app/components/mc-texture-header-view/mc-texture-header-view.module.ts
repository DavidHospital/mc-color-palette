import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatTableModule } from "@angular/material/table";
import { FlexLayoutModule } from "@angular/flex-layout";
import { McTextureHeaderViewComponent } from "./mc-texture-header-view.component";
import { McTextureModule } from "../mc-texture/mc-texture.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    McTextureModule,
  ],
  declarations: [
    McTextureHeaderViewComponent,
  ],
  exports: [
    McTextureHeaderViewComponent,
  ]
})
export class McTextureHeaderViewModule { }