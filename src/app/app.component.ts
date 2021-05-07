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

  prefix: string = '';

  suffix: string = '';

  replace: string = '';

  replaceWith: string = '';

  onFileChange(event: any): void {
    this.fileNames = [...event.target.files].map((file: File) => {
      let ext = file.name.match(/\.[^/.]+$/);
      let tempName = this.prefix + file.name.replace(/\.[^/.]+$/, "") + this.suffix;
      if (this.showExt) {
        tempName += ext ? ext[0] : '';
      }
      if (this.replace && this.replaceWith) {
        tempName = tempName.replace(new RegExp(this.replace, 'g'), this.replaceWith)
      }
      return tempName;
    }
    )
  }

  onExtChange(event: any): void {
    this.showExt = event.target.checked;
  }

  onPrefix(event: any): void {
    this.prefix = event.target.value;
  }

  onSuffix(event: any): void {
    this.suffix = event.target.value;
  }

  replaceFn(event: any): void {
    this.replace = event.target.value;
  }

  replaceWithFn(event: any): void {
    this.replaceWith = event.target.value;
  }
}
