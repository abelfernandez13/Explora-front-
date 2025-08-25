import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { AddUserComponent } from '../add-user/add-user.component';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
 standalone: true,
  styleUrls: ['./dashboard.component.scss'],
  imports: [ AddUserComponent, ButtonModule,AvatarModule,SidebarModule,MatToolbarModule  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers:[AddUserComponent] // Import it here
})
export class DashboardComponent {

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

    closeCallback(e): void {
        this.sidebarRef.close(e);
    }

    sidebarVisible: boolean = true;



}
