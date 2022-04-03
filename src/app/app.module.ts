import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { McTextureHeaderViewModule } from './components/mc-texture-header-view/mc-texture-header-view.module';
import { McTextureListViewModule } from './components/mc-texture-list-view/mc-texture-list-view.module';
import { PaletteModule } from './components/palette/palette.module';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FlexModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    McTextureHeaderViewModule,
    McTextureListViewModule,
    PaletteModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
