import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alert-success',
  templateUrl: './alert-success.component.html',
  styleUrls: ['./alert-success.component.sass']
})
export class AlertSuccessComponent {

  @Input() messages: any[]

}
