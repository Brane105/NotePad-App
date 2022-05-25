import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './models/notes/notes.component';
import { CreateNotesComponent } from './models/create-notes/create-notes.component';
const routes: Routes = [
  {path:"",component:NotesComponent},
  {path:"create",component:CreateNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
