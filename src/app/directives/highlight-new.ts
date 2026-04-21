import { Directive, HostBinding, input, OnInit, signal } from '@angular/core';

@Directive({
  selector: '[appHighlightNew]',
  host: {
    '[style.backgroundColor]':'this.bgc()',
    '(mouseenter)':'this.onMouseEnter()',
    '(mouseleave)':'this.onMouseLeave()'
  }
})
export class HighlightNew implements OnInit{
  // Une directive d'attribut permet de modifier le comportement
  // et l'apparence d'un element du dom
  // Quelle apparence
  // JE veux binder le backgroundColor de l'élément hote
  in = input('yellow');
  out = input('red');

  // @HostBinding('style.backgroundColor')
  bgc = signal(this.out());
  ngOnInit(): void {
    this.bgc.set(this.out());
  }
  // Quel comportement
  onMouseEnter() {
    this.bgc.set(this.in());
  }
  onMouseLeave() {
    this.bgc.set(this.out());
  }
}
