import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'  // Le sélecteur que vous utiliserez dans votre template HTML
})
export class HighlightDirective {

  // Injecter les dépendances ElementRef et Renderer2
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  // Survoler l'élément
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');  // Applique une couleur de fond jaune
  }

  // Sortir du survol de l'élément
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);  // Enlève la couleur de fond
  }

  // Méthode pour appliquer ou retirer le style
  private highlight(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
