import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() navs;

  @Input() linkTemplate: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
