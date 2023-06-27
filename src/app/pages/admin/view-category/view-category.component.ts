import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  categories =[
    // {
    //   cid:13,
    //   title:'programming ',
    //   description:'this is for testing'

    // },
    // {
    //   cid:13,
    //   title:'programming ',
    //   description:'this is for testing'

    // },
    // {
    //   cid:13,
    //   title:'programming ',
    //   description:'this is for testing'

    // },
  ]
  

  constructor(private _category:CategoryService) { }

  ngOnInit(): void {

    this._category.categories().subscribe((data:any)=>{

      this.categories= data;
      console.log(this.categories);
    },
    
    (error)=>{
      console.log('error');
      Swal.fire("Error!!","error in loading data",'error');
    }
    );
  }

}
