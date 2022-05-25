import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/notes.service';
import { notes } from '../notes';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  items?: Array<notes>;

  constructor(public service : NotesService) { }
  // this is automatically called after the constructor
  ngOnInit(): void {
    this.service.getNotes().subscribe(result => {
      this.items = result;
    });
  }
}

