import { Component } from '@angular/core';
import {first} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from './auth/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyOwnCutlery';

  isLogged = false;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
  ) {

    if (this.authenticationService.currentUserToken) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.isLogged = false;
    this.authenticationService.logout()
        .pipe(first())
        .subscribe(
            data => {

              Swal.fire({
                title: 'Logout',
                text: 'Cya Later',
                icon: 'success',
                confirmButtonText: 'Ok'
              });
              this.router.navigate(['/login']);
            },
            error => {

              Swal.fire({
                title: 'Error!',
                text: error,
                icon: 'error',
                confirmButtonText: 'Ups!'
              });
            });
  }
}
