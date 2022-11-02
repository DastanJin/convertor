import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextToBaseComponent } from './text-to-base/text-to-base.component';
import { FileToBaseComponent } from './file-to-base/file-to-base.component';
import { FormsModule } from '@angular/forms';
import { saveAs } from 'file-saver';
import { FileSaverModule } from 'ngx-filesaver';
@NgModule({
  declarations: [
    AppComponent,
    TextToBaseComponent,
    FileToBaseComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FileSaverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
