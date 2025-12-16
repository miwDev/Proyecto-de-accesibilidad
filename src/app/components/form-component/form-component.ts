import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Alumno } from '../../interfaces/alumno';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-component.html',
  styleUrl: './form-component.scss',
})
export class FormComponent {
  nombre: string = '';
  apellido: string = '';
  dni: string = '';

  alumno: Alumno = { nombre: '', apellido: '', dni: '' };

  errorNombre: boolean = false;
  errorApellido: boolean = false;
  errorDni: boolean = false;

  constructor(private router: Router) {}

  limpiarErrores() {
    this.errorNombre = false;
    this.errorApellido = false;
    this.errorDni = false;
  }

  enviarFormulario() {
    this.limpiarErrores();

    if (!this.nombre || this.nombre.trim().length === 0) {
      this.errorNombre = true;
    }

    if (!this.apellido || this.apellido.trim().length === 0) {
      this.errorApellido = true;
    }

    if (!this.dni || this.dni.trim().length === 0) {
      this.errorDni = true;
    }

    if (this.errorNombre || this.errorApellido || this.errorDni) {
      return;
    }

    this.alumno.nombre = this.nombre;
    this.alumno.apellido = this.apellido;
    this.alumno.dni = this.dni;

    let data = localStorage.getItem('alumnos');

    let listaAlumnos: Alumno[] = data ? JSON.parse(data) : [];

    listaAlumnos.push(this.alumno);
    localStorage.setItem('alumnos', JSON.stringify(listaAlumnos));

    this.router.navigate(['/table']);
  }
}
