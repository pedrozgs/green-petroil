import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { NewsPost } from '../models/post.model';

const localPosts: NewsPost[] = [
  {
    id: 1,
    title: 'Tecnologia e monitoramento para operações mais eficientes',
    body: 'A Green Petroil está ampliando o monitoramento digital de suas operações. Sensores, análise de dados e manutenção preventiva ajudam a reduzir desperdícios, identificar riscos com antecedência e tornar os processos mais eficientes. A iniciativa faz parte de um plano contínuo de melhoria operacional e responsabilidade ambiental.',
    category: 'INOVAÇÃO',
    date: '12 de outubro de 2026',
    image: '/assets/hero-energy.svg',
    readTime: '4 min de leitura'
  },
  {
    id: 2,
    title: 'Recuperação de áreas e cuidado com a biodiversidade',
    body: 'A recuperação ambiental é uma etapa importante do compromisso da empresa com as regiões onde atua. O trabalho inclui acompanhamento de áreas, plantio de espécies nativas e ações de proteção da biodiversidade, sempre com planejamento e avaliação dos resultados.',
    category: 'MEIO AMBIENTE',
    date: '28 de setembro de 2026',
    image: '/assets/forest.svg',
    readTime: '5 min de leitura'
  },
  {
    id: 3,
    title: 'Segurança e desenvolvimento nas comunidades',
    body: 'Além das atividades industriais, a Green Petroil mantém iniciativas voltadas ao desenvolvimento das comunidades próximas às suas operações. Educação, diálogo e segurança são pilares para construir relações responsáveis e duradouras.',
    category: 'COMUNIDADE',
    date: '10 de setembro de 2026',
    image: '/assets/community.svg',
    readTime: '3 min de leitura'
  }
];

@Injectable({ providedIn: 'root' })
export class NewsService {
  private readonly http = inject(HttpClient);

  getLatestPosts(): Observable<NewsPost[]> {
    // API pública de demonstração. Os textos locais entram como fallback caso a API esteja indisponível.
    return this.http.get<{ id: number; title: string; body: string }[]>(
      'https://jsonplaceholder.typicode.com/posts?_limit=3'
    ).pipe(
      map((items) => items.map((item, index) => ({
        ...localPosts[index],
        id: item.id,
        // Mantém o conteúdo editorial do projeto, usando a resposta da API para confirmar a integração.
        title: localPosts[index].title,
        body: localPosts[index].body
      }))),
      catchError(() => of(localPosts))
    );
  }

  getPostById(id: number): Observable<NewsPost | undefined> {
    return this.getLatestPosts().pipe(
      map((posts) => posts.find((post) => post.id === id) ?? localPosts.find((post) => post.id === id))
    );
  }

  getFallbackPosts(): NewsPost[] {
    return localPosts;
  }
}