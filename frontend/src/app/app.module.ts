import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialComponentsModule } from "./modules/material-components/material-components.module";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { UploadComponent } from "./components/upload/upload.component";
import { WatchComponent } from "./components/watch/watch.component";
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "upload", component: UploadComponent },
  { path: "watch/:vid", component: WatchComponent },
  { path: "**", redirectTo: "" }
];
@NgModule({
  declarations: [AppComponent, HomeComponent, UploadComponent, WatchComponent, MenuBarComponent, SideBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
