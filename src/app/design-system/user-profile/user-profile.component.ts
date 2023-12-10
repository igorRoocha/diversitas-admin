import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/common/services/screen-service/screen.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private screenService: ScreenService
  ) { 
    this.screenService.setScreenName('Perfil do Usuário');
  }

  ngOnInit() {
  }

}
