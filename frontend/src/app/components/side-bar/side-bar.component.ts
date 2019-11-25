import { Component, ViewChild, Input } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"]
})
export class SideBarComponent {
  @ViewChild("sidenav", { static: false }) sideNav: MatSidenav;
  @Input("active") activeMenu: string = "Home";

  menus = [
    { name: "Home", matIcon: "home", url: "/" },
    { name: "Upload", matIcon: "video_call", url: "/upload" },
    { name: "Setting", matIcon: "settings", url: "/" },
    { name: "Help", matIcon: "help_outline", url: "/" }
  ];

  constructor(private _snackBar: MatSnackBar, private _router: Router) {}

  close(route: string = null) {
    if (route) {
      if (route == "/upload") this.toUpload();
      else this._router.navigate([route]);
    }
    this.sideNav.close();
  }

  toUpload() {
    // if (!this._userGG.user) {
    //   this.openSnackBar("You need to sign in to upload videos!", "OK");
    // } else {
    //   this._router.navigate(["/upload"]);
    // }
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }
}
