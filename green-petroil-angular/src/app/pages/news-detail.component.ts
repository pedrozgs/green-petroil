import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NewsService } from '../services/news.service';
import { NewsPost } from '../models/post.model';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (post) {
      <section class="article-hero" [style.background-image]="'linear-gradient(90deg,rgba(5,35,30,.92),rgba(5,35,30,.35)),url(' + post.image + ')'">
        <div class="container"><a routerLink="/" class="back">← Voltar para o início</a><span class="category">{{ post.category }}</span><h1>{{ post.title }}</h1><p>{{ post.date }} · {{ post.readTime }}</p></div>
      </section>
      <article class="container article-body"><p class="lead">{{ post.body }}</p><p>Na Green Petroil, entendemos que o desenvolvimento do setor de energia exige atenção constante às pessoas, à segurança e ao meio ambiente. Por isso, iniciativas como esta fazem parte de uma visão de melhoria contínua.</p><p>Este conteúdo faz parte do site demonstrativo desenvolvido para o trabalho semestral de Front-End Frameworks.</p><a routerLink="/" class="back-link">← Voltar às notícias</a></article>
    } @else {
      <section class="not-found"><div class="container"><h1>Publicação não encontrada</h1><p>Essa notícia não está disponível no momento.</p><a routerLink="/">Voltar para o início</a></div></section>
    }
  `,
  styles: [`
    .article-hero{background-size:cover;background-position:center;padding:100px 0;color:white}.back{display:inline-block;color:#c6e1c0;text-decoration:none;font-size:12px;margin-bottom:55px}.category{display:block;color:#bce3b2;font-size:10px;letter-spacing:2px;font-weight:800}.article-hero h1{font:800 clamp(34px,5vw,58px)/1.12 Manrope;letter-spacing:-1.7px;max-width:850px;margin:18px 0}.article-hero p{font-size:12px;color:#d0ded7}.article-body{max-width:790px;padding:65px 24px 90px}.article-body p{font-size:15px;line-height:1.9;color:#687970}.article-body .lead{font-size:19px;color:#244b3d}.back-link{display:inline-block;margin-top:25px;color:#438457;font-size:13px;font-weight:800;text-decoration:none}.not-found{padding:100px 0}.not-found h1{font:800 36px Manrope;color:#153b32}.not-found p{color:#687970}.not-found a{color:#438457}
  `]
})
export class NewsDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly newsService = inject(NewsService);
  post?: NewsPost;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.newsService.getPostById(id).subscribe((post) => this.post = post);
  }
}