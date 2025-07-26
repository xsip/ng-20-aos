import {AfterViewInit, Directive, ElementRef, inject, input, PLATFORM_ID} from '@angular/core';
import {isPlatformServer} from '@angular/common';
import {AOSClasses} from './aos-service';

@Directive({
  selector: '[xsipAos]'
})
export class Aos implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly el = inject(ElementRef<HTMLElement>);


  xsipAos = input.required<keyof AOSClasses>();
  constructor() { }

  ngAfterViewInit() {
    if(isPlatformServer(this.platformId))
      return;

    this.el.nativeElement.classList.add(`aos-${this.xsipAos()}`, 'transition-all', 'ease-in-out', 'duration-600', 'aos-element');
    this.el.nativeElement.setAttribute('aos-class', this.xsipAos());
  }
}
