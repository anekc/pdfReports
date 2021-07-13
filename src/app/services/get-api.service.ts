import { Injectable,  } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class GetAPIService {
   baseUrl = 'https://www.breakingbadapi.com/api/'
  constructor(private http: HttpClient) { }
  
  getAllCharacters(){
  return this.http.get(`${this.baseUrl}characters?limit=20&offset=20`);
  }
}
