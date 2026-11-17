import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../shared/section-heading.component';

@Component({
  standalone: true,
  imports: [SectionHeadingComponent],
  template: `
    <section class="page-hero"><div class="container"><span class="eyebrow">NOSSOS PROJETOS</span><h1>Iniciativas que movem<br><em>o setor para frente.</em></h1><p>Conheça algumas frentes de atuação que representam nosso compromisso com eficiência e responsabilidade.</p></div></section>
    <section class="section-pad"><div class="container"><app-section-heading eyebrow="FRENTES DE ATUAÇÃO" title="Projetos com visão de futuro." description="As iniciativas abaixo são exemplos conceituais desenvolvidos para apresentar a atuação da Green Petroil neste projeto acadêmico." />
      <div class="project-list">
        <article><img src="assets/hero-energy.svg" alt="Instalação industrial de energia"><div><span>01 / OPERAÇÕES</span><h2>Eficiência operacional e tecnologia</h2><p>Uso de ferramentas digitais, monitoramento e manutenção preventiva para melhorar processos, reduzir desperdícios e fortalecer a segurança operacional.</p><ul><li>Monitoramento de indicadores</li><li>Manutenção preventiva</li><li>Melhoria contínua de processos</li></ul></div></article>
        <article><img src="assets/forest.svg" alt="Floresta preservada"><div><span>02 / MEIO AMBIENTE</span><h2>Recuperação e conservação ambiental</h2><p>Acompanhamento de áreas, recuperação de espaços degradados e valorização da biodiversidade nas regiões de atuação.</p><ul><li>Plantio de espécies nativas</li><li>Acompanhamento ambiental</li><li>Conscientização e educação ambiental</li></ul></div></article>
        <article><img src="assets/community.svg" alt="Pessoas participando de uma atividade em grupo"><div><span>03 / DESENVOLVIMENTO</span><h2>Relacionamento com comunidades</h2><p>Iniciativas de diálogo e cooperação para apoiar o desenvolvimento local e aproximar a empresa das comunidades.</p><ul><li>Escuta e diálogo comunitário</li><li>Parcerias locais</li><li>Apoio a oportunidades de formação</li></ul></div></article>
      </div>
    </div></section>
  `,
  styles: [`
    .page-hero{background:linear-gradient(90deg,#082c28ed,#082c28aa),url('assets/hero-energy.svg') center/cover;padding:105px 0;color:#fff}
    .eyebrow{font-size:10px;letter-spacing:2px;color:#b8e2ae;font-weight:800}.page-hero h1{font:800 clamp(38px,5vw,60px)/1.12 Manrope;letter-spacing:-2px;margin:20px 0}.page-hero h1 em{font-style:normal;color:#b8e2ae}.page-hero p{color:#d1ded6;max-width:540px;line-height:1.8}
    .section-pad{padding:90px 0}.project-list{display:grid;gap:25px}.project-list article{display:grid;grid-template-columns:40% 1fr;gap:38px;align-items:center;border:1px solid #e4ebe5;border-radius:7px;overflow:hidden}.project-list img{width:100%;height:310px;object-fit:cover}.project-list article>div{padding:25px 35px 25px 0}.project-list span{font-size:10px;letter-spacing:1.5px;color:#4b8b5d;font-weight:800}.project-list h2{font:750 25px Manrope;color:#173c32;margin:14px 0}.project-list p,.project-list li{font-size:13px;line-height:1.8;color:#6c7c73}.project-list ul{padding-left:18px}
    @media(max-width:700px){.project-list article{grid-template-columns:1fr;gap:0}.project-list img{height:220px}.project-list article>div{padding:25px}}
  `]
})
export class ProjectsComponent {}