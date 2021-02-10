import { TabGroupComponent } from './../tab-group/tab-group.component';
import { Component, EventEmitter, forwardRef, OnInit } from '@angular/core';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';

const tabBsGroupComponent = [
  {
    provide: TabGroupComponent,
    useExisting: forwardRef(() => TabBsGroupComponent)
  }
]

@Component({
  selector: 'app-tab-bs-group',
  templateUrl: './tab-bs-group.component.html',
  styleUrls: ['./tab-bs-group.component.css'],
  providers: tabBsGroupComponent
})
export class TabBsGroupComponent extends TabGroupComponent {

}
