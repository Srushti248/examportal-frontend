import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  snack: any;
  private _snackBar: any;

  constructor(private userService:UserService, private snackBar : MatSnackBar) { }

  public user={
    username:'',
    password:'',
    name:'',
    email:'',
    phone:'',
  };

  ngOnInit(): void {
  }

  formSubmit()
  {
    //alert("submit");
   // console.log(this.user);
    if(this.user.username==null || this.user.username==''){
    //  alert("Username is required!!!!");
    this.snackBar.open('username is required', '', {

      duration : 3000,
      verticalPosition : 'top',
      horizontalPosition : 'right',
    });
      return;
    }

    //addUser: userService
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        console.log(data);
      //  alert("success");
      Swal.fire('succesfully done registration', 'user id is '+ data.id, 'success');
        
        
      },
      (error)=>{
         console.log(error);
        // alert("something went wrong");
        this.snackBar.open('something went wrong', '', {
          duration:3000,
        })
        
         
      }
      
    );
       
  }

    
}