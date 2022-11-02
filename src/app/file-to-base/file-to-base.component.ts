import { NONE_TYPE } from '@angular/compiler';
import { ApplicationInitStatus, Component, OnInit } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-file-to-base',
  templateUrl: './file-to-base.component.html',
  styleUrls: ['./../style.css'],
})
export class FileToBaseComponent implements OnInit {
  public base64text: string = '';
  fileSaverService: FileSaverService = new FileSaverService();
  constructor() {}

  ngOnInit(): void {}
  upload(files: Event): void {
    const target = files.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        let result = reader.result as string;
        this.base64text = result.substring(result.indexOf("base64,")+7,result.length);
    };
  }

  download(): void {
    const blob = new Blob([this.base64text], { type: 'application/octet-stream' });
    this.fileSaverService.save(blob, "base64");
    // const link = document.createElement('a');
    // link.href = source;
    // link.download = `newFile`;
    // link.click();
  }
}
