import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private controlSubject = new BehaviorSubject<boolean>(false)

  public get isOpen() {
    return this.controlSubject.asObservable();
  }

  show() {
    this.controlSubject.next(true);
  }
  hide() {
    this.controlSubject.next(false);
  }

}
