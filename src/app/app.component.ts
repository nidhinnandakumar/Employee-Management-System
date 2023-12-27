import { Component } from '@angular/core';
import { AuthService } from './Authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Speridian Employee App';
   //service method of auth service so injecting the servive
   constructor(private authSvc:AuthService){
    authSvc.logout();
   }
 
   isLoggedIn():boolean{
    return this.authSvc.isloggedin();
   }
  logout(){
 
    this.authSvc.logout();
    console.log("Logged out");
   
  }
}
