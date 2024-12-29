import { Injectable, signal } from '@angular/core';
import { ViewTransitionInfo } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ViewtransitionService {
  currentTransition = signal<ViewTransitionInfo | null>(null);
  constructor() { }
}
