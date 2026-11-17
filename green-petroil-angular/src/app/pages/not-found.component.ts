import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `<section class="not-found"><div class="container"><span>404</span><h1>Ops! Página não encontrada.</h1><p>O endereço pode estar incorreto ou a página não existe mais.</p><a routerLink="/">Voltar para o início</a></div></section>`,
  styles: [`
    .not-found{padding:110px 0;text-align:center;background:#f2f6f1}.not-found span{font:800 70px Manrope;color:#78a77c}.not-found h1{font:800 30px Manrope;color:#153b32}.not-found p{color:#6b7b72}.not-found a{display:inline-block;margin-top:18px;background:#143d31;color:white;text-decoration:none;padding:13px 20px;border-radius:4px;font-size:12px}
  `]
})
export class NotFoundComponent {}