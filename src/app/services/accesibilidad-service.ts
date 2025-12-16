import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AccesibilidadService {
  private readonly DEFAULT_TITLE_SIZE = 1.25; // rem
  private readonly DEFAULT_SUBTITLE_SIZE = 1; // rem
  private readonly DEFAULT_TEXT_SIZE = 0.8; // rem

  private fontSizeMultiplier: number = 0;

  // DOCUMENT para acceder al DOM
  constructor(@Inject(DOCUMENT) private document: Document) {}

  aumentarLetra() {
    if (this.fontSizeMultiplier < 3) {
      // Límite máximo
      this.fontSizeMultiplier++;
      this.actualizarTamanoFuente();
    }
  }

  disminuirLetra() {
    if (this.fontSizeMultiplier > -1) {
      // Límite mínimo
      this.fontSizeMultiplier--;
      this.actualizarTamanoFuente();
    }
  }

  private actualizarTamanoFuente() {
    const sumador = 0.1; // Cuánto crece cada vez (0.1rem)

    const newTitle = this.DEFAULT_TITLE_SIZE + this.fontSizeMultiplier * sumador;
    const newSub = this.DEFAULT_SUBTITLE_SIZE + this.fontSizeMultiplier * sumador;
    const newText = this.DEFAULT_TEXT_SIZE + this.fontSizeMultiplier * sumador;

    this.setCssVar('--title-size', `${newTitle}rem`);
    this.setCssVar('--subtitle-size', `${newSub}rem`);
    this.setCssVar('--text-size', `${newText}rem`);
  }

  toggleModoOscuro() {
    // Cambiamos las variables --actual por las variables dark del root
    this.setCssVar('--bg-actual', 'var(--bg-primary-dark)');
    this.setCssVar('--bg-secondary-actual', 'var(--bg-secondary-dark)');
    this.setCssVar('--text-color', 'var(--text-dark)');
    this.setCssVar('--accent-actual', 'var(--accent-dark)');
    this.setCssVar('--secondary-actual', 'var(--secondary-dark)');
  }

  toggleAltoContraste() {
    // Forzamos colores puros para máximo contraste
    this.setCssVar('--bg-actual', '#000000');
    this.setCssVar('--bg-secondary-actual', '#000000'); // Todo negro
    this.setCssVar('--text-color', '#FFFF00'); // Texto Amarillo chillón
    this.setCssVar('--accent-actual', '#FFFF00'); // Bordes amarillos
    this.setCssVar('--secondary-actual', '#FFFFFF');
    this.setCssVar('--error', '#FF0000'); // Rojo puro
  }

  toggleLecturaFacil() {
    // cambio a fuentes mas claras con mas peso
    this.setCssVar('--font-family', 'Verdana, Geneva, sans-serif');
    this.setCssVar('--text-weight', '500');
  }

  reset() {
    this.fontSizeMultiplier = 0;
    this.actualizarTamanoFuente();

    // Volver a los valores inciales del root
    this.setCssVar('--bg-actual', 'var(--bg-primary-clear)');
    this.setCssVar('--bg-secondary-actual', 'var(--bg-secondary-clear)');
    this.setCssVar('--text-color', 'var(--text-clear)');
    this.setCssVar('--accent-actual', 'var(--accent-clear)');
    this.setCssVar('--secondary-actual', 'var(--secondary-clear)');

    this.setCssVar('--font-family', 'Arial, Helvetica, sans-serif');
    this.setCssVar('--text-weight', '400');
  }

  private setCssVar(name: string, value: string) {
    this.document.documentElement.style.setProperty(name, value);
  }
}
