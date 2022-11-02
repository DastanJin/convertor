import { Component, OnInit } from '@angular/core'
const decode = (str: string): string =>
  Buffer.from(str, 'base64').toString('binary')
const encode = (str: string): string =>
  Buffer.from(str, 'binary').toString('base64')

@Component({
  selector: 'app-text-to-base',
  templateUrl: './text-to-base.component.html',
  styleUrls: ['./../style.css']
})

export class TextToBaseComponent implements OnInit {
  text: string = ''
  constructor() {}

  ngOnInit(): void {}
  clear() {
    ;(document.getElementById('BASE64') as HTMLInputElement).value = ''
    ;(document.getElementById('PlainText') as HTMLInputElement).value = ''
  }
  convert() {
    this.text = this.getText('PlainText')
    if (this.text != '') {
      ;(document.getElementById('BASE64') as HTMLInputElement).value = encode(
        this.text,
      )
    } else {
      this.text = this.getText('BASE64')
      ;(document.getElementById(
        'PlainText',
      ) as HTMLInputElement).value = decode(this.text)
    }
  }
  getText(id: string): string {
    return (document.getElementById(id) as HTMLInputElement).value
  }
}
