import {Component, Input, OnInit} from '@angular/core';
import { Choice } from '../models/Choice';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-choice-presenter',
  templateUrl: './choice-presenter.component.html',
  styleUrls: ['./choice-presenter.component.scss'],
})
export class ChoicePresenterComponent implements OnInit {

  @Input()
  choice: Choice;

  constructor(private choiceService: DataService) { }

  ngOnInit() {}

  getRouterLink(): string[] {
    return ['/', 'selector', (this.hasChoices() ? (this.choice.id || this.choice.name) : 'koniec')];
  }

  hasChoices(): boolean {
    return this.choiceService.choices[this.choice.id || this.choice.name] !== undefined;
  }
}
