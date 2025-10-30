import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  standalone: true,
  imports: [],
  templateUrl: './skill-item.html',
  styleUrl: './skill-item.css'
})
export class SkillItem {
  @Input() skill: string = '';
  @Output() skillClicked = new EventEmitter<string>();

  onClick() {
    this.skillClicked.emit(this.skill);
  }
}
