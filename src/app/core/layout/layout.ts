import { Component } from '@angular/core';
import { Header } from './header/header';
import { RouterModule } from '@angular/router';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-layout',
  imports: [Header, RouterModule, Footer],
  template: `
    <app-header />
    <router-outlet />
    <app-footer />
  `,
})
export class Layout {}
