import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
  <div
    class="progress-bar-container"
    [style.backgroundColor]="backgroundColor"
  >
    <div
      class="progress"
      [style]="{
        backgroundColor: progressColor,
        width: progress + '%'
      }"
    ></div>
  </div>
`,
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() backgroundColor: string = "#ccc";
  @Input() progressColor: string = "tomato";
  @Input() progress = 58;

  // trong constructor thi input chua dc bind
  constructor() {
  }

  // ngOnChange chay truoc ngOnInit
  ngOnChanges(changes: SimpleChanges): void {
    console.log('change', {
      progress: this.progress,
      progressColor: this.progressColor,
      backgroundColor: this.backgroundColor
    })
  }

  ngOnInit(): void {
    console.log('init', {
      progress: this.progress,
      progressColor: this.progressColor,
      backgroundColor: this.backgroundColor
    })
  }

}
