import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { User } from './../models/user.model';
import { UserService } from '../services/service.index';
import { Router } from '@angular/router';

declare function initPlugIns();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    public userService: UserService,
    public router: Router
  ) { }

  ngOnInit() {
    initPlugIns();
    this.createForm();
    this.registerForm.setValue({
      firstName: `Test`,
      secondName: ``,
      firstSurname: `Angular`,
      secondSurname: ``,
      email: `testAngular@test.com`,
      password: `123456`,
      password2: `123456`,
      conditions: true
    });
  }

  compare(field1: string, field2: string) {
    return (group: FormGroup) => {
      const pass1 = group.controls[field1].value;
      const pass2 = group.controls[field2].value;
      if (pass1 === pass2) {
        return null;
      }
      return {
        compare: true
      };
    };
  }

  createForm() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      secondName: new FormControl(),
      firstSurname: new FormControl(null, Validators.required),
      secondSurname: new FormControl(),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      conditions: new FormControl(false)
    }, {
      validators: this.compare(`password`, `password2`)
    });
  }

  registerUser() {
    if (this.registerForm.invalid) {
      return;
    }

    if (!this.registerForm.value.conditions) {
      Swal.fire({
        allowOutsideClick: false,
        allowEscapeKey: false,
        title: `Error en el formulario`,
        text: `Debe aceptar los terminos y las condiciones`,
        icon: `error`,
        confirmButtonText: `Aceptar`
      });
    }
    const formValues = this.registerForm.value;
    this.userService.registerUser(formValues, false)
      .subscribe((res: any) => {
        this.showDoneRegisterSwal(res);
      },
        (err) => {
          console.log(err);
      });
  }

  showDoneRegisterSwal(responseData) {
    Swal.fire({
      allowOutsideClick: false,
      allowEscapeKey: false,
      title: responseData.title,
      text: responseData.text,
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn waves-effect waves-light btn-lg m-1 btn-primary',
        cancelButton: 'btn waves-effect waves-light btn-lg m-1 btn-secondary'
      },
      icon: `success`,
      showCancelButton: true,
      confirmButtonText: `Iniciar sesión`,
      cancelButtonText: `Cerrar`
    }).then((result) => {
      if (result.value) {
        this.router.navigate([`/login`]);
      }
      if (result.dismiss === Swal.DismissReason.cancel) {
        this.registerForm.reset();
      }
    });
  }

}
