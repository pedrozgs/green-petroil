import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeadingComponent } from '../shared/section-heading.component';

@Component({
  standalone: true,
  imports: [RouterLink, SectionHeadingComponent],
  template: `
    <section class="page-hero">
      <div class="container"><span class="eyebrow">SOBRE A GREEN PETROIL</span><h1>Energia para transformar.<br><em>Consciência para evoluir.</em></h1><p>Conheça nossa história, o que nos move e os princípios que orientam nosso trabalho.</p></div>
    </section>
    <section class="section-pad"><div class="container story-grid">
      <div><app-section-heading eyebrow="NOSSA HISTÓRIA" title="Uma empresa em movimento." description="A Green Petroil é uma companhia fictícia criada para este projeto acadêmico. Sua proposta é representar uma empresa do setor de petróleo e energia que busca conciliar desenvolvimento, inovação e responsabilidade socioambiental." /><p class="body-copy">Acreditamos que o setor de energia tem um papel importante na sociedade e, por isso, deve atuar com planejamento, transparência e atenção aos impactos de suas atividades. Nosso compromisso é evoluir continuamente, investindo em pessoas, tecnologia e boas práticas.</p><a class="under-link" routerLink="/projetos">Conheça nossos projetos ↗</a></div>
      <img class="story-image" src="assets/forest.svg" alt="Paisagem natural com montanhas e floresta">
    </div></section>
    <section class="mission"><div class="container mission-grid">
      <article><span>01 / MISSÃO</span><h2>Fazer a energia<br>avançar com<br>responsabilidade.</h2><p>Atuar no setor de energia com eficiência, segurança e respeito às pessoas e ao meio ambiente.</p></article>
      <article><span>02 / VISÃO</span><h2>Construir um<br>futuro melhor<br>para todos.</h2><p>Ser reconhecida pela evolução de suas práticas, pela inovação e pelo compromisso socioambiental.</p></article>
      <article><span>03 / VALORES</span><h2>Princípios que<br>guiam cada<br>decisão.</h2><p>Ética, transparência, segurança, respeito, inovação, colaboração e responsabilidade.</p></article>
    </div></section>
    <section class="section-pad"><div class="container"><app-section-heading eyebrow="NOSSA FORMA DE TRABALHAR" title="Responsabilidade em cada etapa." description="Mais do que comunicar compromissos, buscamos transformar princípios em atitudes no dia a dia." [center]="true" /><div class="cards"><div><b>01</b><h3>Segurança</h3><p>Prioridade para as pessoas e para a prevenção de riscos.</p></div><div><b>02</b><h3>Transparência</h3><p>Diálogo claro e relações construídas com confiança.</p></div><div><b>03</b><h3>Melhoria contínua</h3><p>Aprendizado e inovação para aprimorar processos.</p></div></div></div></section>
  `,
  styles: [`
    .page-hero{background:linear-gradient(90deg,#082c28ed,#082c28aa),url('/green-petroil/assets/hero-energy.svg') center/cover;padding:105px 0;color:#fff}
    .eyebrow{font-size:10px;letter-spacing:2px;color:#b8e2ae;font-weight:800}.page-hero h1{font:800 clamp(38px,5vw,60px)/1.12 Manrope;letter-spacing:-2px;margin:20px 0}.page-hero h1 em{font-style:normal;color:#b8e2ae}.page-hero p{color:#d1ded6;max-width:540px;line-height:1.8}
    .section-pad{padding:90px 0}.story-grid{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}.story-image{width:100%;height:440px;object-fit:cover;border-radius:6px}.body-copy{font-size:14px;line-height:1.85;color:#687970}.under-link{color:#438457;text-decoration:none;font-weight:800;font-size:12px;display:inline-block;margin-top:14px}
    .mission{background:#092f2b;padding:75px 0}.mission-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:35px}.mission article{border-left:1px solid #426457;padding-left:25px}.mission article>span{font-size:10px;letter-spacing:1.5px;color:#acd9a7}.mission h2{font:750 27px/1.25 Manrope;color:#fff;margin:22px 0 15px}.mission p{color:#b7c9bf;font-size:13px;line-height:1.8}
    .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.cards>div{background:#f2f6f1;padding:28px;border-radius:5px}.cards b{font:800 23px Manrope;color:#77a87b}.cards h3{font:750 17px Manrope;color:#153b31}.cards p{font-size:13px;line-height:1.7;color:#708078}
    @media(max-width:750px){.story-grid{grid-template-columns:1fr;gap:35px}.story-image{height:300px}.mission-grid,.cards{grid-template-columns:1fr}.mission article{padding-bottom:18px}}
  `]
})
export class AboutComponent {}