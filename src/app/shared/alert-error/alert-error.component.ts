import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alert-error',
  templateUrl: './alert-error.component.html',
  styleUrls: ['./alert-error.component.sass']
})
export class AlertErrorComponent implements OnInit {

  constructor() { }

  @Input() errors: any[]

  ngOnInit(): void {

  }

}
