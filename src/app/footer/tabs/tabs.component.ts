import { Component, OnInit } from '@angular/core';
import { FooterService } from '../footer.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  constructor(public fs: FooterService) { }

  ngOnInit() {
  }

}
