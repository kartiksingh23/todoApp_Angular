import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotesComponent } from './components/notes/notes.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoShowComponent } from './components/todo-show/todo-show.component';
import { HoverHideDirective } from './directives/hover-hide.directive';
import { TodoComponent } from './components/todo/todo.component';
import { AboutComponent } from './components/about/about.component';
import { TaskdataService } from './services/taskdata.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesComponent,
    TodoInputComponent,
    TodoShowComponent,
    HoverHideDirective,
    TodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TaskdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }