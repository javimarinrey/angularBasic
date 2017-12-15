import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html'
})
export class PopoverComponent implements OnInit {

  code: string = `
<button type="button"
        class="btn btn-outline-secondary"
        placement="top"
        ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        popoverTitle="Popover on top">
  Popover on top
</button>
<ng-template #popContent>Hello, World!</ng-template>
<button type="button"
        class="btn btn-outline-secondary"
        [ngbPopover]="popContent"
        popoverTitle="Fancy content">
  I've got markup and bindings in my popover!
</button>
<button type="button"
        class="btn btn-outline-secondary"
        ngbPopover="You see, I show up on hover!"
        triggers="mouseenter:mouseleave"
        popoverTitle="Pop title">
  Hover over me!
</button>`;

  constructor() { }

  ngOnInit() {
  }

}
