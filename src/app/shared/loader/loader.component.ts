import { AfterViewInit, Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent implements OnInit, AfterViewInit {
  isOpen: boolean = false
  textLoading = "carregando"
  interval: Subscription
  constructor(private loaderService: LoaderService) { }
  ngAfterViewInit(): void {
    this.loaderService.isOpen.subscribe(open => {
      this.isOpen = open
      if (open) {
        this.interval = interval(500).subscribe(() => {
          if (this.isOpen) {
            if (!this.textLoading.includes("...")) {
              this.textLoading = this.textLoading.concat(".");
            } else {
              this.textLoading = this.textLoading.substring(0, this.textLoading.indexOf("..."))
            }
          }
        })
      } else {
        this.interval?.unsubscribe();
      }
    });
  }

  ngOnInit(): void {

  }



}
