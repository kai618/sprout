import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import { UserGoogleService } from "src/app/services/user-google.service";

@Component({
  selector: "app-watch",
  templateUrl: "./watch.component.html",
  styleUrls: ["./watch.component.scss"]
})
export class WatchComponent implements OnInit {
  vid: string;
  hasData = false;

  constructor(
    public firebase: AngularFirestore,
    public _user: UserGoogleService,
    private route: ActivatedRoute
  ) {
    this.vid = this.route.snapshot.params["vid"];
  }

  userInfo: Object;
  ownerAvatarUrl: string;
  ownerName: string;
  videoInfo: Object;
  title: string;
  src: string;
  viewTotal: number;

  ngOnInit() {
    this.firebase
      .collection("videos")
      .doc(this.vid)
      .get()
      .subscribe(data => {
        this.viewTotal = data.data()["views"];
        this.viewTotal = this.viewTotal + 1;
        this.firebase
          .collection("videos")
          .doc(this.vid)
          .update({
            views: this.viewTotal
          })
          .then(() => {
            this.firebase
              .collection("videos")
              .doc(this.vid)
              .snapshotChanges()
              .subscribe(data => {
                this.videoInfo = data.payload.data();
                this.src = this.videoInfo["url"];

                this.title = this.videoInfo["title"];
                this.viewTotal = this.videoInfo["views"];

                this.firebase
                  .collection("users")
                  .doc(this.videoInfo["uid"])
                  .get()
                  .toPromise()
                  .then(data => {
                    this.userInfo = data.data();
                    this.ownerAvatarUrl = this.userInfo["ownerAvatarUrl"];
                    this.ownerName = this.userInfo["name"];
                    this.hasData = true;
                  });
              });
          });
      });
  }
}
