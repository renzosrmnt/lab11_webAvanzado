import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | null = null;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {

    if (this.registerForm?.valid) {

      const username = this.registerForm.get('username')?.value;
      const password = this.registerForm.get('password')?.value;
      
      console.log('Credenciales ingresadas:', { username, password });

      console.log('Registro exitoso');

      this.router.navigate(['/login']);
    }
  }
}
