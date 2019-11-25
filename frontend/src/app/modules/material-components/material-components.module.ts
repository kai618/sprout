import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule
  ]
})
export class MaterialComponentsModule {}
