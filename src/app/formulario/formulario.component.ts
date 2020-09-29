import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [`
    .titulo {
      font-size: 1.5rem;
    }
    .corpo {
      padding: 8px;
      font-size: 1.1rem;
    }
  `],
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {}