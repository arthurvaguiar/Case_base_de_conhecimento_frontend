
import { Component, OnInit, Input, Injectable } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})


export class AlertModalComponent implements OnInit {

  @Input() message: string;
  @Input() type = 'primary';

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  onClose() {
    this.bsModalRef.hide();
  }
}
