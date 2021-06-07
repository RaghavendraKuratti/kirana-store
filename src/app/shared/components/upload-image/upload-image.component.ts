import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
})
export class UploadImageComponent implements OnInit {
  @Input() uploadImageUrl;
  @Output() public emitImageUrl = new EventEmitter<string>();
  isUploading: boolean;
  isUploaded: boolean;
  fileName: string;
  // Upload Task
  task: AngularFireUploadTask;
  // Progress in percentage
  percentage: Observable<number>;

  // Snapshot of uploading file
  snapshot: Observable<any>;

  fileSize: number;
  constructor(private storage: AngularFireStorage) {
    this.isUploading = false;
    this.isUploaded = false;
  }

  ngOnInit() {}
  uploadFile(event: any) {
    // The File object
    const file = event.files.item(0);
    console.log(file);
    // Validation for Images Only
    if (file.type.split('/')[0] !== 'image') {
     console.error('unsupported file type :( ');
     return;
    }

    this.isUploading = true;
    this.isUploaded = false;


    this.fileName = file.name;
    console.log(file);

    // The storage path
    const path = `images/${new Date().getTime()}_${file.name}`;

    //File reference
    const fileRef = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, file);

    // Get file progress percentage
    this.percentage = this.task.percentageChanges();
    this.task.then(res => {
      const imagefile = res.task.snapshot.ref.getDownloadURL();
      imagefile.then( url => {
        console.log(url);
        this.uploadImageUrl = url;
        this.emitImageUrl.emit(this.uploadImageUrl);
      });
    });
  }
}
