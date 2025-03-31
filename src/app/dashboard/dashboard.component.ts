import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { AddUserComponent } from '../add-user/add-user.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  
  providers: [
    AddUserComponent
  ],
})
export class DashboardComponent {

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

    closeCallback(e): void {
        this.sidebarRef.close(e);
    }

    sidebarVisible: boolean = true;



}
