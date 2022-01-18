import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiResponseDto } from './dto/ApiResponseDto';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(httpClient: HttpClient) {
    // console.log("getting_takssss");
    // httpClient.get<ApiResponseDto>("http://api.marketstack.com/v1/eod?access_key=9865c3075f727c8b354c88030a728218&symbols=AAPL").subscribe(res => {
    //   console.log(res.data[0].high);
    // })
    // return new Subject<ApiResponseDto>();
  }
  // getApiData(): Subject<ApiResponseDto> {
  //   return new Subject<ApiResponseDto>();

  // }
}
