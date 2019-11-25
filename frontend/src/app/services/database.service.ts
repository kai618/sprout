import { Injectable } from "@angular/core";
import { User } from "../interfaces/user";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import {
  AngularFireStorageReference,
  AngularFireUploadTask,
  AngularFireStorage
} from "@angular/fire/storage";

import { finalize } from "rxjs/operators";
import { AngularFireFunctions } from "@angular/fire/functions";
import { IVideoData } from "../interfaces/video-form";
import { IVideo } from "../interfaces/video";
import * as firebase from "firebase";

@Injectable({
  providedIn: "root"
})
export class DatabaseService {
  constructor(
    private _afs: AngularFirestore,
    private _storage: AngularFireStorage,
    private _afn: AngularFireFunctions
  ) {}

  checkUser(user: User): boolean {
    const userRef: AngularFirestoreDocument<any> = this._afs
      .collection("users")
      .doc(user.uid);
    userRef.get().subscribe(snap => {
      if (snap.exists) {
        userRef.update({ lastTime: user.lastTime });
        return true;
      } else {
        userRef.set(user);
      }
    });
    return false;
  }

  setBasicVideoInfo(video: IVideo) {
    return this._afs
      .collection("videos")
      .doc(video.vid)
      .set(video);
  }

  updateVideoInfo(vid: string, info: IVideoData) {
    return this._afs
      .collection("videos")
      .doc(vid)
      .update(info);
  }

  addVideoToUser(uid: string, vid: string) {
    return this._afs
      .collection("users")
      .doc(uid)
      .update({ videos: firebase.firestore.FieldValue.arrayUnion(vid) });
  }

  // storage
  uploadVideo(vid: string, file: File, doWhenUploaded: Function) {
    const ref: AngularFireStorageReference = this._storage.ref(
      "/videos/" + vid
    );
    const task: AngularFireUploadTask = ref.put(file);

    const percentage = task.percentageChanges();

    //get url
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe(url => doWhenUploaded(url));
        })
      )
      .subscribe();

    return { task, percentage };
  }

  // thumbnail generated from the video
  getThumbnailURL(vid: string) {
    const genThumb = this._afn.httpsCallable("genThumb");
    return genThumb({ vid: vid }).toPromise();
  }

  uploadThumbnail(vid: string, image: File): Promise<string> {
    const ref: AngularFireStorageReference = this._storage.ref(
      "/videos/" + vid + ".user"
    );
    const task: AngularFireUploadTask = ref.put(image);

    //get url
    return new Promise(resolve => {
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            ref.getDownloadURL().subscribe(url => resolve(url));
          })
        )
        .subscribe();
    });
  }

  // home page
  getPublicVideos() {
    return this._afs.collection("public").snapshotChanges();
  }

  // profile page
  getUserVideos(uid: String) {
    return this._afs.doc(`users/${uid}`).snapshotChanges();
  }
}
