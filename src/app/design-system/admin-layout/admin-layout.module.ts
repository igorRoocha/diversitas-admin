import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MapsComponent } from '../maps/maps.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { TableListComponent } from '../table-list/table-list.component';
import { TypographyComponent } from '../typography/typography.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { AdminLayoutRoutes } from './admin-layout.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    MapsComponent,
    NotificationsComponent,
  ],
  exports: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    MapsComponent,
    NotificationsComponent,
  ]
})

export class AdminLayoutModule {}
