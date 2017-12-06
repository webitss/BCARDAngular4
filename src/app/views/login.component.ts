import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {appService} from "../services/app.service";
import {AuthService} from "../auth/auth.service";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

@Component({
  selector: 'login', 
  styles : [`


  `],
  templateUrl: './login.component.html'})
export class LoginComponent {


    constructor(private router:Router,public service:appService, public auth:AuthService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.router.url}
}