
import { Component } from '@angular/core';

import { Sentence } from './interfaces/sentence';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  hSentences: Sentence[] = [
    {
      text: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
      img: "src/assets/images/img/1.jpg "
    },
    {
      text: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
      img: "src/assets/images/img/2.jpg"
    },
    {
      text: "L'heroi va decidir travessar la porta que el portava a casa",
      img: "src/assets/images/img/3.jpg"
    },
    {
      text: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...",
      img: "src/assets/images/img/4.jpg"
    }
  ]

  currentSentence: number = 0
  currentBackground: number = 0


  prev() {
    this.currentSentence === 0 ? this.currentSentence = this.hSentences.length - 1 : this.currentSentence--
    this.currentBackground === 0 ? this.currentBackground = this.hSentences.length - 1 : this.currentBackground--
    this.changeBg(this.currentBackground)
  }
  next() {
    this.currentSentence === this.hSentences.length - 1 ? this.currentSentence = 0 : this.currentSentence++
    this.currentBackground === this.hSentences.length - 1 ? this.currentBackground = 0 : this.currentBackground++
    this.changeBg(this.currentBackground)
  }

  start: boolean = false
  show() {
    this.start = true

  }
  changeBg(currentBackground: number) {
    let bgContainer = <HTMLImageElement>document.getElementById('bg')
    if (bgContainer) {
      console.log(currentBackground);
      if (currentBackground == 0) {
        bgContainer.src = `../assets/images/img/1.jpg`;
      }
      else {
        bgContainer.src = `../assets/images/img/${currentBackground + 1}.jpg`;
      }

    }

  }
}
