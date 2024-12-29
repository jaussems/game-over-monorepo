import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, ViewTransitionInfo, withViewTransitions } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ViewtransitionService } from './shared/services/viewtransition.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes,
      withViewTransitions({ onViewTransitionCreated })),
   provideHttpClient()
  ],
};


function onViewTransitionCreated(info: ViewTransitionInfo): void {
  const viewTransitionService = inject(ViewtransitionService);
  viewTransitionService.currentTransition.set(info);

  info.transition.finished.finally(() => {
    viewTransitionService.currentTransition.set(null);
  });
}
