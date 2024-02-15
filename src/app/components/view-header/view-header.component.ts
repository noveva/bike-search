import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-header',
  standalone: true,
  imports: [],
  templateUrl: './view-header.component.html'
})
export class ViewHeaderComponent {
  @Input() text!: string;
}
