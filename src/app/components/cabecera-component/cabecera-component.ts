import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccesibilidadService } from '../../services/accesibilidad-service';

@Component({
  selector: 'app-cabecera-component',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './cabecera-component.html',
  styleUrl: './cabecera-component.scss',
})
export class CabeceraComponent {
  menuAbierto: boolean = false;
  navAbierto: boolean = false;

  constructor(private accService: AccesibilidadService) {}

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
    if (this.menuAbierto) {
      this.navAbierto = false;
    }
  }

  toggleNav() {
    this.navAbierto = !this.navAbierto;
    if (this.navAbierto) {
      this.menuAbierto = false;
    }
  }

  fontUp() {
    this.accService.aumentarLetra();
  }
  fontDown() {
    this.accService.disminuirLetra();
  }
  highContrast() {
    this.accService.toggleAltoContraste();
  }
  easyRead() {
    this.accService.toggleLecturaFacil();
  }
  darkMode() {
    this.accService.toggleModoOscuro();
  }
  reset() {
    this.accService.reset();
  }
}
