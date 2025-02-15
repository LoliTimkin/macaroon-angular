import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[BackgroundButton]'
})
export class BackgroundButtonDirective implements OnInit{

  @Input() BackgroundButtonBgImOnHover: string = 'linear-gradient(0deg, #d7475c 0%, #71081d 100%)'

  constructor(private el: ElementRef) {
    console.log(el.nativeElement)
  }

  @HostListener('mouseenter')
  onHover() {
    this.el.nativeElement.style.backgroundImage = this.BackgroundButtonBgImOnHover

  }

  @HostListener('mouseleave')
  onHoverLeave() {
    this.el.nativeElement.style.backgroundImage = "linear-gradient(0deg, #71081d 0%, #d7475c 100%)"
  }

  ngOnInit(){
    this.el.nativeElement.style.backgroundImage = "linear-gradient(0deg, #71081d 0%, #d7475c 100%)"
  }


}
