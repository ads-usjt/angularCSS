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
  valor;
  gerarValor(){
    this.valor = Math.round(Math.random() * 100) + 1;
  }

  obterClasseValor() {
    return this.valor % 2 === 0
      ? ['valor','numero-par']
      : ['valor','numero-impar']
  }

  obterEstilosParaBotao() {
    return{
      backgroundColor: '#EEE6FF',
      padding: '8px',
      width: '20vw',
      border: 'none',
      borderRadius: '4px'
    };
  }

  obterClasseRodape() {
    return ['rodape'];
  }
}