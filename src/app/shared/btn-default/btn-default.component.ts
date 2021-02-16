import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'btn-default',
  templateUrl: './btn-default.component.html',
  styleUrls: ['./btn-default.component.sass']
})
export class BtnDefaultComponent {

  constructor() { }

  @Input() id = ""
  @Input() isLoading = false
  @Input() disabled = false
  @Input() inputText = ""
}
