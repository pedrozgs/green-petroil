import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { ProjectsComponent } from './pages/projects.component';
import { NewsDetailComponent } from './pages/news-detail.component';
import { SocialComponent } from './pages/social.component';
import { NotFoundComponent } from './pages/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Início | Green Petroil' },
  { path: 'empresa', component: AboutComponent, title: 'Nossa empresa | Green Petroil' },
  { path: 'projetos', component: ProjectsComponent, title: 'Projetos | Green Petroil' },
  { path: 'noticias/:id', component: NewsDetailComponent, title: 'Notícia | Green Petroil' },
  { path: 'social', component: SocialComponent, title: 'Projetos sociais | Green Petroil' },
  { path: '**', component: NotFoundComponent, title: 'Página não encontrada' }
];