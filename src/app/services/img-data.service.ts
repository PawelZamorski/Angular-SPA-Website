import { Injectable } from '@angular/core';

import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ImgData {
  imgUrl: string;
  alt: string;
  heading: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImgDataService {

  constructor(private ds: DataService) { }

  getImgData(url: string): Observable<ImgData[]> {
    return this.ds.getData(url)
      .pipe(map((data: any) => { // map method must be used inside pipe method since RxJS v. 6
        data = data.imgData;
        return data;
      }));
  }
}
