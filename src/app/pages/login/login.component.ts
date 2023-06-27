import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private login: LoginService, private router : Router) { }

  public logindata = {

    username: '',
    password: '',
  }


  ngOnInit(): void {
  }

  formSubmit() {
    //alert("submit");
    console.log("login btn click");
    if (this.logindata.username.trim() == null || this.logindata.username == '') {
      //  alert("Username is required!!!!");
      this.snackBar.open('username is required', '', {

        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      return;
    }

    //for password

    if (this.logindata.password.trim() == null || this.logindata.password == '') {
      //  alert("Username is required!!!!");
      this.snackBar.open('password is required', '', {

        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      return;
    }

    this.login.generateToken(this.logindata).subscribe(

      (data: any) => {
        console.log('success');
        console.log(data);

        //login

        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            debugger
                        this.login.setUser(user);
            console.log(user);
            //redirect....ADMIN  : admin-dashboard
            if(this.login.getUserRole() == "ADMIN"){
                 // admin dashboard
                //window.location.href='/admin-dashboard';
                this.router.navigate(['/admin-dashboard']);
                this.login.loginStatusSubject.next(true);

               

            }else if(this.login.getUserRole()== 'NORMAL'){
                //  window.location.href='/user-dashboard';
                this.router.navigate(['/user-dashboard/0']);
                this.login.loginStatusSubject.next(true);
              

            }
            
            else{
              this.login.logout();
            }
            //redirect....NORMAL : normal-dashboard
          }
        );
        
      },
      (error)=>{
        console.log('Error !!');
       console.log(error);
       this.snackBar.open("Invalid Details",'',{
        duration:3000,
       })
        
      },
    );
 }
}
