import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FileToBaseComponent } from './file-to-base/file-to-base.component';
import { TextToBaseComponent } from './text-to-base/text-to-base.component';

const routes: Routes = [
  {path: 'text-to-base', component: TextToBaseComponent},
  {path: 'file-to-base', component: FileToBaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
