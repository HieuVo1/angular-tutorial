import { ToggleComponent } from './toggle/toggle.component';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Custom";
  isCheck = true;
  showLast = true;
  // khoi tao sau afterViewInit
  // static se khoi tao trong ngOnInit nhung ko xu li cho selector nam trong structural Directive
  @ViewChildren(ToggleComponent) toggleComponents: QueryList<ToggleComponent>;
  @ViewChild('nameInput', { static: true, read: ViewContainerRef }) button: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ngAfterViewInit(): void {
    console.log(this.toggleComponents.changes.subscribe(console.log));
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }
}
