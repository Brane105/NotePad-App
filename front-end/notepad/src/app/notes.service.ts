import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { notes } from './models/notes';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private _http :HttpClient) { }

  storenotes(notesref: any): void {
    this._http
      .post('http://localhost:8080/notes', notesref, {
        responseType: 'text',
      })
      .subscribe(
        (result) => alert(result),
        (error) => console.log(error)
      );
  }
  getNotes(): Observable<notes[]> {
    return this._http.get<notes[]>(
      'http://localhost:8080/'
    );
  }
  
}
