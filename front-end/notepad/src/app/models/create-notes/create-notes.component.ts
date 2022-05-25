import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/notes.service';
import { notes } from '../notes';
@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.css']
})
export class CreateNotesComponent implements OnInit {

  resultMsg?:string;
  constructor(public service: NotesService) { }

  ngOnInit(): void {

  }
  storeNotes(notesref: any): void {
    this.service.storenotes(notesref)
    console.log(notesref);
    this.resultMsg = "Notes Added"
    };
}

