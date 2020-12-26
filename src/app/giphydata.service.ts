import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GiphydataService {

  gifs = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  getGiphs() {
    return this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=3pOSjXoXAHNOoiJD3AyytEbKfAsGF08j&limit=20')
      .subscribe((response: any) => {
        this.gifs.next(response.data);
      });
  }

  searchGiphs(gifName: string) {
    let params = new HttpParams();
    params = params.append('q', gifName);
    params = params.append('api_key', '3pOSjXoXAHNOoiJD3AyytEbKfAsGF08j');
    params = params.append('limit', '20');
    return this.http.get('https://api.giphy.com/v1/gifs/search', { params: params })
      .subscribe((response: any) => {
        this.gifs.next(response.data);
      });
  }

  getGifs() {
    return this.gifs.asObservable();
  }
}
