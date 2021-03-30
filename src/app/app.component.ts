import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Users } from './Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  key: string = 'name';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  filterTerm: string;
  
  RESTS: any;
  page = 0;
  count = 0;
  tableSize = 3;
  tableSizes = [3, 6, 9, 12];

  title = 'FrontendZadatak';

constructor(private restService : RestService) { }

url : string = "http://localhost:3000/Users"

columns = ["Country", "State", "First and Last Name", "Balance", "Status", "Registered on"];

index = ["country", "state", "fullName", "balance", "isActive", "registered"];

users : Users[] = [];

ngOnInit(): void {

  this.restService.getUsers().subscribe
  (
    (response)=>
    {
      this.users = response;
    },
    (error)=>
    {
      console.log("Error Occured : " +error);
    }
  );

    this.fetchRests();
  }  

  fetchRests(): void {
    this.restService.getUsers()
      .subscribe(
        response => {
          this.RESTS = response;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  onTableDataChange(event: number){
    this.page = event;
    this.fetchRests();
  }  

  onTableSizeChange(event: { target: { value: number; }; }): void {
    this.tableSize = event.target.value;
    this.page = 0;
    this.fetchRests();
  }  

}

