import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/notes.service';
import { notes } from '../notes';
import { ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  items?: Array<notes>;
  id!: number  ;
  constructor(public service : NotesService,private activatedRouter:ActivatedRoute) { }
  // this is automatically called after the constructor
  ngOnInit(): void {
    this.service.getNotes().subscribe(result => {
      this.items = result;
    });
  }

  deleteEmp(id:any): void {
            this.service.deleteNote(id).subscribe((res) => console.log(res));
        }
}

