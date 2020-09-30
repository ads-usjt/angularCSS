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
export class FormularioComponent {
  obterEstilosParaBotao() {
    return{
      backgroundColor: '#EEE6FF',
      padding: '8px',
      width: '20%',
      border: 'none',
      borderRadius: '4px'
  }};
}