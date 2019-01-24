import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ms-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input()
  note: string;
  
  constructor() { }

  ngOnInit() {
  }

}
