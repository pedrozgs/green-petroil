import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" routerLink="/" aria-label="Green Petroil - página inicial">
          <span class="brand-mark" aria-hidden="true">G<span>+</span></span>
          <span class="brand-name">green<span>petroil</span><small>ENERGIA E RESPONSABILIDADE</small></span>
        </a>
        <button class="menu-toggle" type="button" (click)="menuOpen = !menuOpen"
          [attr.aria-expanded]="menuOpen" aria-label="Abrir ou fechar menu">☰</button>
        <nav class="main-nav" [class.open]="menuOpen" aria-label="Navegação principal">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" (click)="menuOpen=false">Início</a>
          <a routerLink="/empresa" routerLinkActive="active" (click)="menuOpen=false">A empresa</a>
          <a routerLink="/projetos" routerLinkActive="active" (click)="menuOpen=false">Projetos</a>
          <a routerLink="/social" routerLinkActive="active" (click)="menuOpen=false">Projetos sociais</a>
          <a class="nav-cta" routerLink="/empresa" (click)="menuOpen=false">Conheça a Green Petroil <span>↗</span></a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .site-header{position:sticky;top:0;z-index:20;background:rgba(7,36,33,.96);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,.1)}
    .nav-wrap{height:82px;display:flex;align-items:center;justify-content:space-between}
    .brand{display:flex;align-items:center;gap:11px;color:#fff;text-decoration:none}
    .brand-mark{width:42px;height:42px;border:1px solid #9bd6a7;border-radius:13px;display:grid;place-items:center;color:#b9e7bd;font:800 23px Manrope;position:relative}
    .brand-mark span{font-size:12px;position:absolute;right:5px;top:3px}
    .brand-name{font:800 19px Manrope;letter-spacing:-.7px;line-height:1}
    .brand-name>span{color:#a8dcae}
    .brand-name small{display:block;font:600 8px 'DM Sans';letter-spacing:1.5px;color:#b4c7c0;margin-top:6px}
    .main-nav{display:flex;align-items:center;gap:27px}
    .main-nav a{color:#d5e3dd;text-decoration:none;font-size:13px;font-weight:600;transition:.2s}
    .main-nav a:hover,.main-nav a.active{color:#a9dfa9}
    .main-nav .nav-cta{background:#b5dfae;color:#123b30;padding:12px 17px;border-radius:5px}
    .main-nav .nav-cta:hover{background:#d0efc7;color:#123b30}
    .menu-toggle{display:none;background:none;border:0;color:white;font-size:26px}
    @media(max-width:800px){.nav-wrap{height:70px}.menu-toggle{display:block}.main-nav{display:none;position:absolute;top:70px;left:0;right:0;background:#092f2b;padding:20px 24px 25px;flex-direction:column;align-items:stretch;gap:20px}.main-nav.open{display:flex}.main-nav .nav-cta{text-align:center}}
  `]
})
export class SiteHeaderComponent {
  menuOpen = false;
}