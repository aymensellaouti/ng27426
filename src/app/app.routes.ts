import { Routes } from '@angular/router';
import { First } from './components/first/first';
import { CvPage } from './cv/cv-page/cv-page';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { Color } from './components/color/color';
import { TodoComponent } from './todo/todo/todo.component';
import { Second } from './components/second/second';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { NF404 } from './components/nf404/nf404';
import { Login } from './auth/login/login';
import { AddCv } from './cv/add-cv/add-cv';
import { authGuard } from './auth/guards/auth-guard';
//
export const routes: Routes = [
  // { path: '**', component: First},
  { path: '', component: First },
  { path: 'cv', component: CvPage },
  { path: 'cv/add', component: AddCv, canActivate: [authGuard] },
  { path: 'cv/:id', component: DetailsCvComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'word', component: MiniWordComponent },
  { path: 'color', component: Color },
  { path: 'login', component: Login },
  // { path: 'hello/aymen', redirectTo: 'cv'},
  { path: 'hello/:name', component: Second },
  { path: '**', component: NF404 },
];
