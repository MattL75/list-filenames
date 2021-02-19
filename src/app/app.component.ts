import { Component } from '@angular/core';

@Component({
  selector: 'lfn-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'list-filenames';

  fileNames: string[] = [];

  showExt: boolean = false;

  onFileChange(event: any): void {
    this.fileNames = [...event.target.files].map((file: File) =>
      this.showExt ? file.name : file.name.replace(/\.[^/.]+$/, "")
    )
  }

  onExtChange(event: any): void {
    this.showExt = event.target.checked;
  }
}
