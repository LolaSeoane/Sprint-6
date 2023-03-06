import { Component, Input } from '@angular/core';
import { Sentence } from '../home/interfaces/sentence';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {
//sentence="El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial";
  @Input() sentence!: Sentence;

  @Input() currentSentence!: boolean
  
}
