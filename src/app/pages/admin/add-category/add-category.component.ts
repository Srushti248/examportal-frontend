import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category={

    title:'',
    description:'',
  };
  _snackBar: any;

  constructor(private CategoryService: CategoryService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){

    if(this.category.title.trim()==''|| this.category.title==null){
      this.snackBar.open("Title Required!!",'',{
        duration:3000,
         
      });

      return;
    }

    //all done

    this.CategoryService.addCategory(this.category).subscribe((data:any)=>{
      this.category.title='',
      this.category.description='',
      Swal.fire('success','category is added succesfully','success');

    },
    (error)=>{
      Swal.fire('Error','category is not added','error');


    }
    
    
    )
  }

}
