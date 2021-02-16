import { Component } from '@angular/core';

@Component({
  selector: 'lfn-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'list-filenames';

  fileNames: string[] = [];

  fileMode: boolean = false;

  onFileChange(event: any): void {
    this.fileNames = [...event.target.files].map((file: File) =>
      file.name.replace(/\.[^/.]+$/, "")
    )
  }
}
