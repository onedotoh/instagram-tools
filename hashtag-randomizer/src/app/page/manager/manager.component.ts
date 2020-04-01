import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManagerComponent implements OnInit {
  high: string;
  mid: string;
  low: string;
  brand: string;

  result: string;
  size: number;

  constructor(private message: NzMessageService) { }

  ngOnInit() {
    this.high = '#mdcommunity #zbrush #thegraphicspr0ject #surreal42 #rsa_graphics #c4d #cinema4d #graphicdesign #behance #dribbble #graphicgang #adobe #photoshop #adobephotoshop #adobeillustrator #render #creative #abstract #inspiration #3dsmax #cgi #3dmodel #3dart #3d #3d #cgi #render #adobephotoshop #thegraphicspr0ject #creative #cinema4d #3dsmax #zbrush #adobe';
    this.mid = '#dailyrender #renderzone #c4dart #octanerender #otoy #xuxoe #mgcollective #redshift #b3d #blender3d #renderzone #cgsociety #autodeskmaya #fa_hypnotic #d_expo #howiseedatworld #gsgdaily #mograph #dribbblers #gfxmob #eyeondesign #designfeed';
    this.low = '#blendercommunity #blenderrender #cgiart #digitalsculpting #3dsculpting #zbrushart #zbrushsculpt #thedesigntalks #blender28 #digital3d #zbrushcentral';
    this.brand = '#polyspheric';
    this.initResult();
  }

  initResult() {
    this.result = '';
    // this.result += (this.shuffle(this.high.split(' ')).slice(0, 10).toString().replace(/,/g, ' '));
    // this.result += ' ' + (this.shuffle(this.mid.split(' ')).slice(0, 10).toString().replace(/,/g, ' '));
    // this.result += ' ' + (this.shuffle(this.high.split(' ')).slice(0, 10).toString().replace(/,/g, ' '));

    let arr = [];

    arr = arr.concat(this.shuffle(this.high.split(' ')).slice(0, 10));
    arr = arr.concat(this.shuffle(this.mid.split(' ')).slice(0, 10));
    arr = arr.concat(this.shuffle(this.low.split(' ')).slice(0, 10));

    arr = this.shuffle(arr);

    arr[0] = this.brand;

    this.size = arr.length;

    this.result = arr.toString().replace(/,/g, ' ');


  }


  shuffle(array): [] {
    // tslint:disable-next-line: one-variable-per-declaration
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  copyToClipboard() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.result;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.initResult();
    this.message.info('Copied to Clipboard!');
  }

}
