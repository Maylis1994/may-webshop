import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss'],
})
export class SidepanelComponent {
  @Input() public showPanel: boolean = false;
  @Output() showPanelChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public closePanel() {
    this.showPanel = false;
    this.showPanelChange.emit(this.showPanel);
  }
}
