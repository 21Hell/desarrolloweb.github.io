import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Note: styleUrls is the correct property name
  standalone: true, // Marking the component as standalone
})
export class AppComponent {
  title = 'piano';

  aplicarSonido(numero: number) {
    let audio = new Audio();
    switch (numero) {
      case   1:
        audio.src = "assets/audio/1.mp3";
        break;
      case  2:
        audio.src = "assets/audio/2.mp3";
        break;
      case  3:
        audio.src = "assets/audio/3.mp3";
        break;
      case  4:
        audio.src = "assets/audio/4.mp3";
        break;
      // Add cases for other numbers as needed
      default:
        break;
    }
    audio.play(); // Ensure to play the audio after setting the source
  }
}
