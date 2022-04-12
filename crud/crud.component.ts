import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  newEmployeeClicked = false;

  employees = [
    {name:'Rohit', position:'Developer'},
    {name:'Reyansh', position:'Junior Engineer'},
    {name:'Pramodi', position:'Designer'}
  ];
  color:any;

  constructor() { }

  ngOnInit(): void {
  }

  model:any={};
  model2:any={};
  addEmployee(){
    this.employees.push(this.model);
    this.model={}
  }

deleteEmployee(id:any){
  this.employees.splice(id);
  console.log(id)
}

myValue:any;

editEmployee(editEmployeeInfo:any){
  this.model2.name=this.employees[editEmployeeInfo].name;
  this.model2.position=this.employees[editEmployeeInfo].position;
  this.myValue = editEmployeeInfo;
}

updateEmployee(){
  let editEmployeeInfo = this.myValue;
  for(let id = 0; id<this.employees.length; id++){  
    if(id==editEmployeeInfo){
      this.employees[id] = this.model2;
      this.model2={}
    }
  }
}

addNewEmployeeBtn(){
  this.newEmployeeClicked = !this.newEmployeeClicked;
}

changeColorOne(){
  this.color = !this.color;
  if(this.color){
    return '#f6f6f6';
  }
  else{
    return 'lightGray';
  }
}

}
