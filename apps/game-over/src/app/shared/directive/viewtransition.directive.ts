import { computed, Directive, inject, input } from '@angular/core';
import { ViewtransitionService } from '../services/viewtransition.service';

@Directive({
  selector: '[appViewtransition]'
})
export class ViewtransitionDirective {
  private readonly viewTranistionService = inject(ViewtransitionService);

  protected readonly name = input<string>('', { alias: 'appViewTransition' });
  protected readonly id = input<number>();

  protected readonly viewTransitionName = computed(() => {
    const currentTransition = this.viewTranistionService.currentTransition();

    const apply =
      Number(currentTransition?.to.firstChild?.params['id']) === this.id() ||
      Number(currentTransition?.from.firstChild?.params['id']) === this.id();

    return apply ? this.name() : 'none';
  });

}
