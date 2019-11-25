import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu-bar",
  templateUrl: "./menu-bar.component.html",
  styleUrls: ["./menu-bar.component.scss"]
})
export class MenuBarComponent implements OnInit {
  @Input() route: string;
  @Output("show-side-bar") showSideNav = new EventEmitter();

  constructor(private _router: Router, private _snackBar: MatSnackBar) {}

  showSideBar() {
    this.showSideNav.emit();
  }
  ngOnInit() {}

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
