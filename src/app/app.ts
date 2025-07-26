  import {Component, inject, signal} from '@angular/core';
  import {AosService} from './aos-service';
  import {AosWatch} from './aos-watch';
  import {Aos} from './aos';

  @Component({
    selector: 'xsip-root',
    imports: [
      AosWatch,
      Aos
    ],
    providers: [AosService],
    template: `
      <div xsipAosWatch class="overflow-auto h-screen">
        <div class="max-w-4xl h-screen flex mx-auto gap-5 py-10">
          <div
            class="bg-button h-[50px] text-primary hover:bg-button-hover hover:drop-shadow-md hover:scale-105 cursor-pointer transition-all ease-in-out duration-500  w-auto px-5 py-2.5 rounded-md">
            Button 1
          </div>
        </div>
        <div class="max-w-4xl h-screen flex mx-auto gap-5 py-10">
          <div
            class="bg-button h-[50px] text-primary hover:bg-button-hover hover:drop-shadow-md hover:scale-105 cursor-pointer transition-all ease-in-out duration-500  w-auto px-5 py-2.5 rounded-md">
            Button 2
          </div>
        </div>
        <div class="max-w-4xl h-screen flex mx-auto gap-5 py-10">
          <div
            [xsipAos]="'fadeIn'"
            class="bg-button h-[50px] text-primary hover:bg-button-hover hover:drop-shadow-md hover:scale-105 cursor-pointer transition-all ease-in-out duration-500  w-auto px-5 py-2.5 rounded-md">
            Button 3
          </div>
        </div>
        <div class="max-w-4xl h-screen flex mx-auto gap-5 py-10">
          <div
            class="bg-button h-[50px] text-primary hover:bg-button-hover hover:drop-shadow-md hover:scale-105 cursor-pointer transition-all ease-in-out duration-500  w-auto px-5 py-2.5 rounded-md">
            Button 4
          </div>
        </div>
      </div>
    `,
    styles: [],
  })
  export class App {
    protected readonly title = signal('xsip-aos');
  }
