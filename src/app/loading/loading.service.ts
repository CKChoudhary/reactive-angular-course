import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  //do not expose loading subject to outside world
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    return undefined;
  }

  loadingOn() {
    this.loadingSubject.next(true);
  }

  loadingOff() {
    this.loadingSubject.next(false);
  }
}
