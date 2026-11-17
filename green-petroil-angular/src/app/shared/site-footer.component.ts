import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a class="brand" routerLink="/">
            <span class="brand-mark">G<span>+</span></span>
            <span class="brand-name">green<span>petroil</span><small>ENERGIA E RESPONSABILIDADE</small></span>
          </a>
          <p class="footer-about">Energia para movimentar o presente. Responsabilidade para construir o futuro.</p>
        </div>
        <div><h3>Institucional</h3><a routerLink="/empresa">A empresa</a><a routerLink="/projetos">Projetos</a><a routerLink="/social">Projetos sociais</a></div>
        <div><h3>Contato</h3><p>contato&#64;greenpetroil.com.br</p><p>São Paulo — Brasil</p></div>
      </div>
      <div class="container copyright"><span>© 2026 Green Petroil. Projeto acadêmico fictício.</span><span>Compromisso com um futuro melhor.</span></div>
    </footer>
  `,
  styles: [`
    .site-footer{background:#062522;color:#d0ded7;padding:60px 0 22px}
    .footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:50px;padding-bottom:45px}
    .footer-about{max-width:330px;color:#9fb5aa;font-size:14px;line-height:1.7;margin-top:22px}
    h3{font:700 13px Manrope;color:#b8e0b4;margin:0 0 18px}
    .footer-grid>div>a:not(.brand){display:block;color:#c2d2ca;text-decoration:none;margin:12px 0;font-size:13px}
    .footer-grid p{font-size:13px;color:#a9bcb2}
    .copyright{border-top:1px solid #23423b;padding-top:20px;display:flex;justify-content:space-between;color:#81998d;font-size:11px}
    @media(max-width:650px){.footer-grid{grid-template-columns:1fr 1fr;gap:30px}.footer-grid>div:first-child{grid-column:1/-1}.copyright{gap:10px;flex-direction:column}}
  `]
})
export class SiteFooterComponent {}