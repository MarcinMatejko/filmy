import {Component, Input, OnInit} from '@angular/core';
import { Choice } from '../models/Choice';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-choice-presenter',
  templateUrl: './choice-presenter.component.html',
  styleUrls: ['./choice-presenter.component.scss'],
})
export class ChoicePresenterComponent implements OnInit {

  @Input()
  choice: Choice;

  constructor(
    private choiceService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.choice.id = params.get("choice.id")
    })
  }

  getRouterLink(): string[] {
    return ['/', 'selector', (this.hasChoices() ? (this.choice.id || this.choice.name) : 'koniec')];
  }

  hasChoices(): boolean {
    return this.choiceService.choices[this.choice.id || this.choice.name] !== undefined;
  }

  onSelect(choice) {
    console.log("cname")
  }
}
