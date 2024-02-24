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
  title = 'piano';
  aplicarSonido(numero: number) {
    let audio = new Audio();
    switch (numero) {
      case 1:
        audio.src = "assets/sonidos/1.mp3";
        break;
      case 2:
        audio.src = "assets/sonidos/re.wav";
        break;
      case 3:
        audio.src = "assets/sonidos/mi.wav";
        break;
      case 4:
        audio.src = "assets/sonidos/fa.wav";
        break;
      case 5:
        audio.src = "assets/sonidos/sol.wav";
        break;
      case 6:
        audio.src = "assets/sonidos/la.wav";
        break;
      case 7:
        audio.src = "assets/sonidos/si.wav";
        break;
      default:
        break;
    }
  }
}
