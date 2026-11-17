import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsPost } from '../models/post.model';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="news-card">
      <a class="image-wrap" [routerLink]="['/noticias', post.id]" [attr.aria-label]="'Ler: ' + post.title">
        <img [src]="post.image" [alt]="post.title" loading="lazy">
        <span class="category">{{ post.category }}</span>
      </a>
      <div class="news-content">
        <div class="meta">{{ post.date }} <span>·</span> {{ post.readTime }}</div>
        <h3><a [routerLink]="['/noticias', post.id]">{{ post.title }}</a></h3>
        <p>{{ post.body }}</p>
        <a class="read-link" [routerLink]="['/noticias', post.id]">Ler matéria <span>↗</span></a>
      </div>
    </article>
  `,
  styles: [`
    .news-card{background:#fff;border:1px solid #e6ece7;border-radius:9px;overflow:hidden;transition:transform .25s,box-shadow .25s}
    .news-card:hover{transform:translateY(-5px);box-shadow:0 18px 40px #153e2c12}
    .image-wrap{height:205px;display:block;position:relative;overflow:hidden}
    img{width:100%;height:100%;object-fit:cover;transition:transform .4s}
    .news-card:hover img{transform:scale(1.04)}
    .category{position:absolute;bottom:14px;left:16px;background:#c7e8bd;color:#173d30;font-size:9px;letter-spacing:1px;font-weight:800;padding:7px 10px;border-radius:3px}
    .news-content{padding:22px}
    .meta{font-size:10px;color:#829188;margin-bottom:12px}
    .meta span{padding:0 5px}
    h3{font:750 18px/1.35 Manrope;margin:0 0 10px;letter-spacing:-.4px}
    h3 a{color:#153d32;text-decoration:none}
    p{font-size:12px;line-height:1.7;color:#718078;margin:0 0 18px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
    .read-link{font-size:12px;font-weight:800;color:#397e53;text-decoration:none}
    .read-link span{margin-left:5px}
  `]
})
export class NewsCardComponent {
  @Input({ required: true }) post!: NewsPost;
}