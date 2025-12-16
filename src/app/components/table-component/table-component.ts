import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Alumno } from '../../interfaces/alumno';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-table-component',
  imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule],
  templateUrl: './table-component.html',
  styleUrl: './table-component.scss',
})
export class TableComponent implements OnInit {
  alumnos: Alumno[] = [];
  alumnosAcciones: Alumno[] = [];

  constructor() {}

  ngOnInit() {
    const data = localStorage.getItem('alumnos');
    if (data) {
      this.alumnos = JSON.parse(data);
    }
  }

  borrarAlumno(idx: number) {
    this.alumnos.splice(idx, 1);
    localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
  }
}
