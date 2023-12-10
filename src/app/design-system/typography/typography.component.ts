import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/common/services/screen-service/screen.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  constructor(
    private screenService: ScreenService
  ) { 
    this.screenService.setScreenName('Tipografia');
  }

  ngOnInit() {
  }

}
