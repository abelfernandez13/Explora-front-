import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
})
export class Header {
  private router = inject(Router);

  loginUser() {
    alert('login');
    this.router.navigate(['/dashboard']);
  }
}
