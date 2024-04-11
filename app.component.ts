import { Component, OnInit } from '@angular/core';
import { Ibill } from './models/BillSheet';
import { HospitalBillService } from './services/hospital-bill.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bll:Ibill;
  billsheet:Ibill[] ;
  constructor(private alldata:HospitalBillService){
    this.billsheet=[]
    this.bll={
      billNumber:0,
    patientname:"",
    address:"",
    billDate:0,
    gender:"",
    dateofbirth:0,
    emailid:"",
    mobilenumber:"",
    investigation:"",
    fees:0,
    }
  }
  ngOnInit(): void {
    this.alldata.getalldata().subscribe(data=>this.billsheet=data);
  }
  AddToGrid():void{
    debugger;
    if (this.bll&&this.bll.billNumber) {
    this.bll.billNumber=parseInt(this.bll.billNumber.toString());
    this.bll.billDate=parseInt(this.bll.billDate.toString());
    this.bll.dateofbirth=parseInt(this.bll.dateofbirth.toString());
    this.bll.fees=parseInt(this.bll.fees.toString());
    this.alldata.GetDetailsbyBillNumber(this.bll.billNumber).subscribe(data=>this.bll=data);
    }
  }
}
