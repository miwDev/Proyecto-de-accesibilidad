import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { OnInit } from '@angular/core';
import { Alumno } from '../../interfaces/alumno';

@Component({
  selector: 'app-landing-component',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './landing-component.html',
  styleUrl: './landing-component.scss',
})
export class LandingComponent implements OnInit {
  ngOnInit(): void {
    if (!localStorage.getItem('alumnos')) {
      const alumnos: Alumno[] = [
        { nombre: 'Juan', apellido: 'Pérez', dni: '12345678A' },
        { nombre: 'María', apellido: 'Gómez', dni: '87654321B' },
        { nombre: 'Carlos', apellido: 'López', dni: '11223344C' },
        { nombre: 'Ana', apellido: 'Martínez', dni: '99887766D' },
      ];
      localStorage.setItem('alumnos', JSON.stringify(alumnos));
    }
  }
}
