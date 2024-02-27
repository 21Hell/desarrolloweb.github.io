import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dados';

  dadoIzq='../assets/img/dice1.png';
  dadoDer='../assets/img/dice4.png';
  numero1: number = 0;
  numero2: number = 0;
  tirarDados(){
    this.numero1 = Math.floor(Math.random() * 6) + 1;
    this.numero2 = Math.floor(Math.random() * 6) + 1;
    this.dadoIzq = `../assets/img/dice${this.numero1}.png`;
    this.dadoDer = `../assets/img/dice${this.numero2}.png`;
  }
}
