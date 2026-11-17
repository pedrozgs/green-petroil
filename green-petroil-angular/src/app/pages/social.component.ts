import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../shared/section-heading.component';

@Component({
  standalone: true,
  imports: [SectionHeadingComponent],
  template: `
    <section class="page-hero"><div class="container"><span class="eyebrow">PROJETOS SOCIAIS</span><h1>Crescer junto faz<br><em>parte do caminho.</em></h1><p>Acreditamos que o desenvolvimento de uma empresa também deve gerar oportunidades para as pessoas.</p></div></section>
    <section class="section-pad"><div class="container"><app-section-heading eyebrow="NOSSO IMPACTO SOCIAL" title="Oportunidades que chegam mais longe." description="As ações sociais apresentadas são propostas institucionais fictícias para demonstrar como a Green Petroil pode contribuir com as comunidades." />
      <div class="social-grid">
        <article><img src="assets/education.svg" alt="Sala de aula com estudantes"><div><span>EDUCAÇÃO</span><h2>Conhecimento abre caminhos</h2><p>Apoio a atividades educativas, incentivo à leitura e oportunidades de formação para jovens.</p></div></article>
        <article><img src="assets/volunteer.svg" alt="Voluntários trabalhando juntos"><div><span>VOLUNTARIADO</span><h2>Participação que transforma</h2><p>Mobilização de colaboradores em ações comunitárias, campanhas e atividades de cidadania.</p></div></article>
        <article><img src="assets/seedling.svg" alt="Mãos segurando uma pequena planta"><div><span>MEIO AMBIENTE</span><h2>Consciência desde cedo</h2><p>Atividades de educação ambiental para incentivar atitudes sustentáveis no cotidiano.</p></div></article>
      </div>
    </div></section>
    <section class="quote"><div class="container"><span>“</span><h2>O desenvolvimento só faz sentido quando é compartilhado.</h2><p>Green Petroil · Compromisso com as pessoas</p></div></section>
  `,
  styles: [`
    .page-hero{background:linear-gradient(90deg,#082c28ed,#082c28aa),url('assets/community.svg') center/cover;padding:105px 0;color:#fff}
    .eyebrow{font-size:10px;letter-spacing:2px;color:#b8e2ae;font-weight:800}.page-hero h1{font:800 clamp(38px,5vw,60px)/1.12 Manrope;letter-spacing:-2px;margin:20px 0}.page-hero h1 em{font-style:normal;color:#b8e2ae}.page-hero p{color:#d1ded6;max-width:540px;line-height:1.8}
    .section-pad{padding:90px 0}.social-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}.social-grid article{border:1px solid #e4ebe5;border-radius:7px;overflow:hidden}.social-grid img{width:100%;height:210px;object-fit:cover}.social-grid article>div{padding:23px}.social-grid span{font-size:10px;letter-spacing:1.5px;color:#4c8b5d;font-weight:800}.social-grid h2{font:750 19px Manrope;color:#163d32;margin:12px 0}.social-grid p{font-size:13px;line-height:1.8;color:#6c7c73}
    .quote{background:#092f2b;padding:75px 0;text-align:center}.quote span{font:800 75px Georgia;color:#a8d9a5;line-height:.8}.quote h2{font:750 clamp(25px,4vw,38px) Manrope;color:#fff;max-width:720px;margin:10px auto 20px}.quote p{font-size:11px;letter-spacing:1.5px;color:#b2c9bc}
    @media(max-width:750px){.social-grid{grid-template-columns:1fr}.social-grid img{height:230px}}
  `]
})
export class SocialComponent {}