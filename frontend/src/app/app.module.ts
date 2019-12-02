// firebase
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireFunctionsModule } from "@angular/fire/functions";
import { environment } from "src/environments/environment";

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
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { LoginComponent } from "./components/login/login.component";
import { UserGoogleService } from "./services/user-google.service";
import { DatabaseService } from "./services/database.service";
import { ThemeService } from "./services/theme.service";
import { UploadInputComponent } from "./components/upload-input/upload-input.component";
import { UploadProcessComponent } from "./components/upload-process/upload-process.component";
import { DiskSizePipe } from "./pipes/disk-size.pipe";
import { PeriodPipe } from "./pipes/period.pipe";
import { TruncatePipe } from "./pipes/truncate.pipe";
import { ViewFormatPipe } from "./pipes/view-format.pipe";
import { UploadProcessFileComponent } from "./components/upload-process-file/upload-process-file.component";
import { UploadThumbnailSelectComponent } from "./components/upload-thumbnail-select/upload-thumbnail-select.component";
import { VideoInfoFormComponent } from "./components/video-info-form/video-info-form.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DragAndDropDirective } from './directives/drag-and-drop.directive';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "upload", component: UploadComponent },
  { path: "watch/:vid", component: WatchComponent },
  { path: "**", redirectTo: "" }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadComponent,
    WatchComponent,
    MenuBarComponent,
    SideBarComponent,
    LoginComponent,
    UploadInputComponent,
    UploadProcessComponent,
    DiskSizePipe,
    PeriodPipe,
    TruncatePipe,
    ViewFormatPipe,
    UploadProcessFileComponent,
    UploadThumbnailSelectComponent,
    VideoInfoFormComponent,
    DragAndDropDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    RouterModule.forRoot(routes),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserGoogleService, DatabaseService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
