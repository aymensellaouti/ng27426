import { Directive, HostBinding, HostListener, Input, input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight implements OnInit{
  // Une directive d'attribut permet de modifier le comportement
  // et l'apparence d'un element du dom
  // Quelle apparence
  // JE veux binder le backgroundColor de l'élément hote
  @Input()
  in = 'yellow';
  @Input()
  out = 'red';

  @HostBinding('style.backgroundColor')
  bgc = this.out;
  ngOnInit(): void {
    this.bgc = this.out;;
  }

  // Quel comportement
  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgc = this.in;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgc = this.out;
  }
}
