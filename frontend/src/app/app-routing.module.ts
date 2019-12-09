import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { WatchComponent } from './components/watch/watch.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "upload", component: UploadComponent },
  { path: "watch/:vid", component: WatchComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
