import {DestroyRef, Injectable} from '@angular/core';
import {fromEvent} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';


const AOSClasses = {
  fadeIn: 'opacity-0',
}
export type AOSClasses = typeof AOSClasses;

@Injectable()
export class AosService {
  private watchList: HTMLElement[] = [];

  addToWatchList(watchListElement: HTMLElement, destroyRef: DestroyRef) {
    this.watchList.push(watchListElement);
    fromEvent(watchListElement, 'scroll')
      .pipe(takeUntilDestroyed(destroyRef))
      .subscribe(e => {
        for (const element of [...watchListElement.getElementsByClassName('aos-element')])
          this.handleVisibilityChange(element as HTMLElement, this.isVisibleWithin(element as HTMLElement, watchListElement));
      });
  }


  private handleVisibilityChange(element: HTMLElement, isVisible?: boolean) {
    const aosClass = element.getAttribute('aos-class') as keyof AOSClasses;
    if (!aosClass) {
      return;
    }
    const tailwindClassList = AOSClasses[aosClass];

    if (!tailwindClassList)
      return;

    const tailwindClasses = tailwindClassList.split(' ');

    if (!tailwindClasses.length)
      return;

    if (isVisible) {

      for (const entry of tailwindClasses) {
        if (element.classList.contains(entry))
          element.classList.remove(entry);

      }

      return;

    }
    for (const entry of tailwindClasses) {
      if (!element.classList.contains(entry))
        element.classList.add(entry);
    }

  }

  private isVisibleWithin(element: HTMLElement, container: HTMLElement) {
    const threshold = parseInt(element.getAttribute('aos-threshold') ?? '100');
    const
      rect = element.getBoundingClientRect(),
      windowHeight = (container.clientHeight);

    return !(
      Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < threshold ||
      Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < threshold
    )
  }
}
