import { Routes } from '@angular/router';
import { First } from './components/first/first';
import { CvPage } from './cv/cv-page/cv-page';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { Color } from './components/color/color';
import { TodoComponent } from './todo/todo/todo.component';

export const routes: Routes = [
  { path: '', component: First},
  { path: 'cv', component: CvPage},
  { path: 'todo', component: TodoComponent},
  { path: 'word', component: MiniWordComponent},
  { path: 'color', component: Color},
];
