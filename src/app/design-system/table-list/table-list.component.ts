import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/common/services/screen-service/screen.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(
    private screenService: ScreenService
  ) { 
    this.screenService.setScreenName('Tabelas');
  }

  ngOnInit() {
  }

}
