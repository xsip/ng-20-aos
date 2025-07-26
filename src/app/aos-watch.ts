import {AfterViewInit, DestroyRef, Directive, ElementRef, inject, PLATFORM_ID} from '@angular/core';
import {AosService} from './aos-service';
import {isPlatformServer} from '@angular/common';

@Directive({
  selector: '[xsipAosWatch]'
})
export class AosWatch  implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly aosService = inject(AosService);
  private readonly destroyRef = inject(DestroyRef);

  ngAfterViewInit() {
    if(isPlatformServer(this.platformId))
      return;
    this.aosService.addToWatchList(this.el.nativeElement, this.destroyRef);
  }

}
