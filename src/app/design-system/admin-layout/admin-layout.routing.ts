import { Routes } from '@angular/router';

import { UserProfileComponent } from '../user-profile/user-profile.component';
import { TableListComponent } from '../table-list/table-list.component';
import { TypographyComponent } from '../typography/typography.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MapsComponent } from '../maps/maps.component';
import { NotificationsComponent } from '../notifications/notifications.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'user-profile',
        component: UserProfileComponent,
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'table-list',
        component: TableListComponent,
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'notifications',
        component: NotificationsComponent,
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'maps',
        component: MapsComponent,
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'typography',
        component: TypographyComponent,
      },
    ],
  },
  // { path: 'dashboard',      component: DashboardComponent },
  // { path: 'user-profile',   component: UserProfileComponent },
  // { path: 'table-list',     component: TableListComponent },
  // { path: 'typography',     component: TypographyComponent },
  // { path: 'maps',           component: MapsComponent },
  // { path: 'notifications',  component: NotificationsComponent },
];
