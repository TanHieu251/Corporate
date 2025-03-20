import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-item',
  standalone: false,

  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss',
})
export class ProjectItemComponent {
  @Input() project: any;
}
