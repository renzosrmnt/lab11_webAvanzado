import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: LoginService,
    private router: Router // Inyecta el Router aquí
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe(
        response => {
          // Manejar la respuesta exitosa
          console.log(response);
          alert('Login successful!');
          this.router.navigate(['/home']); // Redirigir al usuario a /home
        },
        error => {
          // Manejar los errores
          console.error(error);
          alert('Invalid credentials. Please try again.');
        }
      );
    }
  }
}
