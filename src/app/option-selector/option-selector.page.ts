import {Component, OnInit} from '@angular/core';

import { Choice } from '../models/Choice';


export const choices: { [key: string]: Choice[] } = {
    home: [
        { 
            name: 'bajka',
            color: 'dark'
        }, {
            name: 'dokument',
            color: 'tertiary'
        }, {
            name: 'film',
            color: 'success'
        }, {
            name: 'serial',
            color: 'danger'
        }],
    bajka: [{
        name: 'Na poważnie',
        id: 'powaga',
        color: 'tertiary'
    }/*, 'Na wesoło', 'Z morałem', 'Dla dorosłych'*/],
    powaga: []
};

@Component({
    selector: 'app-option-selector',
    templateUrl: './option-selector.component.html',
    styleUrls: ['./option-selector.component.scss'],
})
export class OptionSelectorPage implements OnInit {

    private readonly selections: Choice[];

    constructor() {
        this.selections = choices.home;
    }

    ngOnInit() {
    }

    getChoice(index: number): Choice {
        return this.selections[index];
    }
}
