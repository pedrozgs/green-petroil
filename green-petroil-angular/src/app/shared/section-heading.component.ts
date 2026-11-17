import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  template: `
    <div class="section-heading" [class.center]="center">
      <span class="eyebrow">{{ eyebrow }}</span>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  `,
  styles: [`
    .section-heading{max-width:650px;margin-bottom:35px}
    .section-heading.center{text-align:center;margin-left:auto;margin-right:auto}
    .eyebrow{display:inline-block;color:#448b60;font-size:10px;letter-spacing:2px;font-weight:800;margin-bottom:12px}
    h2{font:800 clamp(28px,4vw,43px)/1.13 Manrope;color:#123b32;letter-spacing:-1.5px;margin:0 0 14px}
    p{color:#65766e;font-size:15px;line-height:1.75;margin:0}
  `]
})
export class SectionHeadingComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() description = '';
  @Input() center = false;
}