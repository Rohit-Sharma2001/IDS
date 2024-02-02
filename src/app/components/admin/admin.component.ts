import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/comman/services/api.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  accountForm:FormGroup
  items:any=["Cofee","Masala Chai","Maggie","Connect","Burger","Grilled Sandwich","Advance"]
  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:  IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
constructor(private fb:FormBuilder,private api:ApiService,private toast:ToastrService){
  this.accountForm=this.fb.group({
    category:["",Validators.required],
    mode:["",Validators.required],
    status:["",Validators.required],
    source:["",Validators.required],
    description:["",Validators.required],
    amount:['',Validators.required]
  })
  this.dropdownList = [
    { item_id: "coffee", item_text: 'Coffee' },
    { item_id: "masalachai", item_text: 'Masala chai' },
    { item_id: "connect", item_text: 'Connect' },
    { item_id: 'advance', item_text: 'Advance' },
    { item_id: 'maggie', item_text: 'Maggie' },
    { item_id: 'groceries', item_text: 'Groceries' },
    { item_id: 'sandwich', item_text: 'Sandwich' },
    { item_id: 'burger', item_text: 'Burger' },
    { item_id: 'pasta', item_text: 'Pasta' },
    { item_id: 'coaching', item_text: 'coaching' },
    { item_id: 'project', item_text: 'project' },


    { item_id: 'cold coffee', item_text: 'Cold Coffee' },
    { item_id: 'vada pav', item_text: 'vada pav' },


    

    
  ];
}
ngOnInIt(){
 
  this.selectedItems = [];
  
}




onItemSelect(item: any) {
console.log(item);
}
onSelectAll(items: any) {
console.log(items);
}

submit(){
  if(this.accountForm.valid){
    this.api.post('transaction/saveTransaction',this.accountForm.value).subscribe((data:any)=>{
      if(data.code==1){
    this.toast.success(`${this.accountForm.value.amount} added successfully`,"Added")

this.accountForm.reset()
      }else{
        console.log("error")
      }
    })
  }
}
}
