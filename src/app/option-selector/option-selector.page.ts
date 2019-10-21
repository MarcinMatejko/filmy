import {Component, OnInit} from '@angular/core';

import { Choice } from '../models/Choice';
import { DataService } from '../services/data.service';



@Component({
    selector: 'app-option-selector',
    templateUrl: './option-selector.component.html',
    styleUrls: ['./option-selector.component.scss'],
})
export class OptionSelectorPage implements OnInit {

    private readonly selections: Choice[];
    subscribedParam = "initial value";

    constructor(
        userChoice: DataService) {
            this.selections = userChoice.choices.home;
        }

    ngOnInit() {

    }

   
    getChoice(index: number): Choice {
        return this.selections[index];
    }
}
