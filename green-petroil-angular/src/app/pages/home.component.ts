import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsService } from '../services/news.service';
import { NewsPost } from '../models/post.model';
import { NewsCardComponent } from '../shared/news-card.component';
import { SectionHeadingComponent } from '../shared/section-heading.component';

@Component({
  standalone: true,
  imports: [RouterLink, NewsCardComponent, SectionHeadingComponent],
  template: `
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <span class="hero-kicker"><i></i> ENERGIA QUE MOVE. RESPONSABILIDADE QUE TRANSFORMA.</span>
        <h1>O futuro se constrói<br>com <em>energia e consciência.</em></h1>
        <p>Desenvolvemos soluções para o setor de energia com foco em eficiência, segurança e respeito ao meio ambiente.</p>
        <div class="hero-actions">
          <a class="button button-green" routerLink="/empresa">Conheça nossa empresa <span>↗</span></a>
          <a class="text-button" routerLink="/projetos">Explore nossos projetos <span>→</span></a>
        </div>
        <div class="hero-note"><span class="note-line"></span> COMPROMISSO QUE VAI ALÉM DA ENERGIA</div>
      </div>
      <div class="hero-index"><b>01</b><span>/ 03</span></div>
    </section>

    <section class="intro section-pad">
      <div class="container intro-grid">
        <div class="intro-photo">
          <img src="/assets/hero-energy.svg" alt="Instalação de energia ao pôr do sol">
          <div class="photo-caption"><b>Energia para hoje.</b><span>Responsabilidade para amanhã.</span></div>
        </div>
        <div class="intro-copy">
          <span class="eyebrow">QUEM SOMOS</span>
          <h2>Movemos a energia.<br><em>Respeitamos o amanhã.</em></h2>
          <p>A Green Petroil é uma companhia do setor de energia que acredita que desenvolvimento e responsabilidade precisam caminhar juntos.</p>
          <p>Trabalhamos para evoluir nossas operações, valorizar pessoas e contribuir com as comunidades onde estamos presentes.</p>
          <a class="under-link" routerLink="/empresa">Saiba mais sobre a empresa <span>↗</span></a>
          <div class="values-row"><div><b>01</b><span>Segurança em<br>primeiro lugar</span></div><div><b>02</b><span>Eficiência e<br>inovação</span></div><div><b>03</b><span>Respeito ao<br>meio ambiente</span></div></div>
        </div>
      </div>
    </section>

    <section class="pillars section-pad">
      <div class="container">
        <app-section-heading eyebrow="NOSSO COMPROMISSO" title="Energia com propósito." description="Nossas decisões são guiadas por princípios que ajudam a construir relações responsáveis e resultados duradouros." [center]="true" />
        <div class="pillar-grid">
          <article><span class="pillar-icon">◎</span><h3>Eficiência</h3><p>Buscamos processos cada vez melhores, com uso consciente de recursos e melhoria contínua.</p></article>
          <article><span class="pillar-icon">♧</span><h3>Responsabilidade</h3><p>Consideramos os impactos ambientais e sociais em nossas atividades e decisões.</p></article>
          <article><span class="pillar-icon">✳</span><h3>Inovação</h3><p>Valorizamos tecnologia, conhecimento e novas ideias para evoluir o setor de energia.</p></article>
        </div>
      </div>
    </section>

    <section class="news-section section-pad">
      <div class="container">
        <div class="news-top"><app-section-heading eyebrow="NOTÍCIAS E ATUALIZAÇÕES" title="O que estamos fazendo." description="Acompanhe iniciativas, projetos e novidades da Green Petroil." /><span class="live-tag"><i></i> ATUALIZAÇÕES</span></div>
        @if (loading) { <p class="status">Carregando as últimas publicações...</p> }
        @if (!loading && posts.length) {
          <div class="news-grid">@for (post of posts; track post.id) { <app-news-card [post]="post" /> }</div>
        }
        @if (error) { <p class="api-note">Não foi possível acessar a API agora. Exibindo as publicações de demonstração.</p> }
      </div>
    </section>

    <section class="social-banner">
      <div class="container social-inner">
        <div><span class="eyebrow">PESSOAS FAZEM A DIFERENÇA</span><h2>Desenvolver também é<br><em>cuidar de pessoas.</em></h2><p>Conheça as ações sociais que apoiam educação, oportunidades e qualidade de vida nas comunidades.</p><a class="button button-green" routerLink="/social">Conheça nossas iniciativas <span>↗</span></a></div>
        <div class="social-image"><img src="/assets/community.svg" alt="Grupo de pessoas reunidas em atividade comunitária"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero{min-height:610px;position:relative;display:flex;align-items:center;color:white;background:#0a302a url('/assets/industrial-energy.svg') center 48%/cover}
    .hero-overlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(3,29,26,.94) 0%,rgba(4,35,30,.82) 48%,rgba(4,35,30,.18) 100%)}
    .hero-content{position:relative;z-index:1;padding-top:65px;padding-bottom:80px}
    .hero-kicker{font-size:10px;letter-spacing:2px;color:#c2dfbd;font-weight:700}.hero-kicker i,.live-tag i{display:inline-block;width:7px;height:7px;border-radius:50%;background:#a8dca6;margin-right:9px}
    h1{font:800 clamp(43px,6vw,72px)/1.08 Manrope;letter-spacing:-3px;max-width:780px;margin:25px 0}
    h1 em,h2 em{font-style:normal;color:#b8e2ae}
    .hero-content>p{max-width:500px;color:#d0ded7;font-size:16px;line-height:1.8}
    .hero-actions{display:flex;align-items:center;gap:28px;margin-top:32px}.button{display:inline-flex;align-items:center;gap:25px;text-decoration:none;padding:15px 19px;border-radius:4px;font-size:12px;font-weight:800}
    .button-green{background:#b7dfa9;color:#143a2e}.button-green:hover{background:#d1efc7}
    .text-button{color:white;text-decoration:none;font-size:12px;font-weight:700}.text-button span{margin-left:8px;color:#b7dfa9}
    .hero-note{display:flex;align-items:center;gap:12px;margin-top:72px;font-size:9px;letter-spacing:2px;color:#c4d4cc}.note-line{width:35px;height:1px;background:#a8dca6}
    .hero-index{position:absolute;right:5.5%;bottom:43px;color:#b5c9bf;font-size:11px}.hero-index b{font:700 25px Manrope;color:#fff;margin-right:8px}
    .section-pad{padding:100px 0}.intro-grid{display:grid;grid-template-columns:1fr 1fr;gap:85px;align-items:center}
    .intro-photo{position:relative;height:490px}.intro-photo img{width:100%;height:100%;object-fit:cover;border-radius:5px}.photo-caption{position:absolute;bottom:22px;left:22px;background:#092f2b;color:#fff;padding:17px 20px;display:flex;flex-direction:column;gap:4px}.photo-caption b{font:700 15px Manrope}.photo-caption span{font-size:11px;color:#bad0c4}
    .eyebrow{display:inline-block;color:#448b60;font-size:10px;letter-spacing:2px;font-weight:800;margin-bottom:13px}.intro-copy h2,.social-inner h2{font:800 clamp(32px,4vw,47px)/1.15 Manrope;color:#123b32;letter-spacing:-1.8px;margin:0 0 20px}.intro-copy h2 em{color:#4b9360}
    .intro-copy p{font-size:14px;color:#6d7c74;line-height:1.85}.under-link{display:inline-block;margin-top:12px;color:#397e53;text-decoration:none;font-size:12px;font-weight:800;border-bottom:1px solid #9bc8a0;padding-bottom:8px}.under-link span{margin-left:10px}
    .values-row{display:flex;gap:30px;border-top:1px solid #e4ebe5;margin-top:40px;padding-top:24px}.values-row div{display:flex;gap:10px;align-items:flex-start}.values-row b{font:800 18px Manrope;color:#75a77a}.values-row span{font-size:10px;line-height:1.5;color:#66786e}
    .pillars{background:#f2f6f1}.pillar-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.pillar-grid article{padding:32px;background:#fff;border:1px solid #e4ebe3;border-radius:6px}.pillar-icon{font-size:28px;color:#57986a}.pillar-grid h3{font:750 18px Manrope;color:#173d32;margin:17px 0 10px}.pillar-grid p{font-size:13px;line-height:1.75;color:#728078;margin:0}
    .news-section{background:#fff}.news-top{display:flex;justify-content:space-between;align-items:flex-start}.live-tag{font-size:9px;letter-spacing:1.4px;color:#62806d;margin-top:8px}.news-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}.status,.api-note{font-size:13px;color:#728078;padding:20px 0}.api-note{color:#8a7650}
    .social-banner{background:#092f2b;padding:80px 0}.social-inner{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}.social-inner .eyebrow{color:#b2dba9}.social-inner h2{color:#fff}.social-inner p{max-width:450px;color:#c0d1c8;font-size:14px;line-height:1.8;margin-bottom:25px}.social-image{height:350px}.social-image img{width:100%;height:100%;object-fit:cover;border-radius:5px}
    @media(max-width:800px){.hero{min-height:570px}.intro-grid,.social-inner{grid-template-columns:1fr;gap:40px}.intro-photo{height:350px}.news-grid{grid-template-columns:1fr 1fr}.section-pad{padding:70px 0}.social-image{height:280px}}
    @media(max-width:560px){.hero{min-height:590px}.hero-overlay{background:linear-gradient(90deg,rgba(3,29,26,.94),rgba(4,35,30,.65))}h1{letter-spacing:-2px}.hero-actions{align-items:flex-start;flex-direction:column;gap:18px}.hero-note{margin-top:48px}.news-top{display:block}.live-tag{display:inline-block;margin:-10px 0 25px}.news-grid,.pillar-grid{grid-template-columns:1fr}.values-row{gap:13px}.values-row div{gap:6px}.values-row span{font-size:9px}}
  `]
})
export class HomeComponent implements OnInit {
  private readonly newsService = inject(NewsService);
  posts: NewsPost[] = [];
  loading = true;
  error = false;

  ngOnInit(): void {
    this.newsService.getLatestPosts().subscribe({
      next: (posts) => { this.posts = posts; this.loading = false; },
      error: () => { this.posts = this.newsService.getFallbackPosts(); this.loading = false; this.error = true; }
    });
  }
}