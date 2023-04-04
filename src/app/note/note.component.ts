import { Component, Input } from '@angular/core';

@Component({
  selector: 'ms-note',
  templateUrl: 'note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input()
  note: string;

}
