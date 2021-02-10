import { TabContentDirective } from './tab-content.directive';
import { TabGroupComponent } from './../tab-group/tab-group.component';
import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css']
})
export class TabPanelComponent implements OnInit {

  @Input() title: string;
  @ViewChild(TemplateRef, { static: true }) implicitBody: TemplateRef<unknown>;
  @ContentChild(TabContentDirective, { static: true, read: TemplateRef }) explicitBody: TemplateRef<unknown>;
  constructor(private tabGroup: TabGroupComponent) { }

  get panelBody() {
    return this.explicitBody || this.implicitBody;
  }
  ngOnInit(): void {
    this.tabGroup.addTab(this);
  }

  ngOnDestroy(): void {
    this.tabGroup.removeTab(this);
  }

}
