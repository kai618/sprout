import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-watch-video",
  templateUrl: "./watch-video.component.html",
  styleUrls: ["./watch-video.component.scss"]
})
export class WatchVideoComponent {
  @Input() src: string;
  constructor() {}
}
