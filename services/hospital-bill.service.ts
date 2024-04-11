import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ibill } from '../models/BillSheet';

@Injectable({
  providedIn: 'root'
})
export class HospitalBillService {
  alp:string="https://localhost:44395/api/HospitalBill/"

  constructor(private http:HttpClient)
   {
    
    }
  GetDetailsbyBillNumber(billNumber:number):Observable<Ibill>{
    debugger;
    return this.http.get<Ibill>(this.alp+"GetdetailsbyBillNumber?BillNumber="+billNumber);
  }
  InserttheHospitalBillData(opt:Ibill):Observable<number>{
    return this.http.post<number>(this.alp+"InsertData",opt);
    
  }
  updateHospitalBillData(pnj:Ibill):Observable<number>{
    return this.http.put<number>(this.alp+"update",pnj);
  }
  getalldata():Observable<Ibill[]>{
    return this.http.get<Ibill[]>(this.alp+"Retrive");
  }
}
