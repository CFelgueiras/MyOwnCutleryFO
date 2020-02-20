import {Component, NgModule, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../services/authentication.service';
import Swal from 'sweetalert2';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule
    ]
})

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    isLogged = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserToken) {
            this.isLogged = true;

        } else {
            this.isLogged = false;
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(4)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }


    onSubmit() {

        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.isLogged = true;
                    Swal.fire({
                        title: 'Login',
                        text: 'Logged In !',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    }).then(() => {
                           location.reload();
                        }
                    );

                },
                error => {
                    this.isLogged = false;
                    Swal.fire({
                        title: 'Error!',
                        text: error,
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    });
                });

    }
}
