import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, MatRadioModule, MatButtonModule],
  templateUrl: './forms.component.html',
})
export class FormsComponent implements OnInit {
  
  movieForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
      director: ['', Validators.required],
      genre: ['', Validators.required],
      synopsis: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.movieForm.valid) {
      const formData = this.movieForm.value;
      console.log('Formulario enviado:');
      console.log('Título:', formData.title);
      console.log('Director:', formData.director);
      console.log('Género:', formData.genre);
      console.log('Sinópsis:', formData.synopsis);
    } else {
      console.log('El formulario no es válido. Por favor, complete todos los campos.');
    }
  }
}
