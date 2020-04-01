import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
