import { Injectable } from '@angular/core';
import { Choice } from '../models/Choice';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  choices: { [key: string]: Choice[] } = { 
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
  bajka: [
    {
        name: 'Na poważnie',
        id: 'powaga',
        color: 'dark'
    }, {
        name: 'Na wesoło',
        id: 'wesolo',
        color: 'tertiary'
      }, {
        name: 'Z morałem',
        id: 'moral',
        color: 'success'
      }, {
        name: 'Dla dorosłych',
        id: 'dorosly',
        color: 'danger'
      }],
  dokument: [
    {
      name: 'Przyrodniczy',
      // id: 'przyroda',
      color: 'dark'
    }, {
      name: 'Historyczny',
      // id: 'historia',
      color: 'tertiary'
    }, {
      name: 'Naukowy',
      // id: 'nauka',
      color: 'success'
    }, {
      name: 'Teorie Spiskowe',
      // id: 'teoria',
      color: 'danger'
    }],
  film: [
    {
      name: 'Komedia',
      id: 'komedia',
      color: 'dark'
    }, {
      name: 'Thriller',
      id: 'thriller',
      color: 'tertiary'
    }, {
      name: 'Akcja',
      id: 'akcja',
      color: 'success'
    }, {
      name: 'Horror',
      id: 'teoria',
      color: 'danger'
    }],
  serial: [
    {
      name: 'Sitcom',
      id: 'sitcom',
      color: 'dark'
    }, {
      name: 'Fantasy',
      id: 'fantasy',
      color: 'tertiary'
    }, {
      name: 'Kryminał',
      id: 'kryminal',
      color: 'success'
    }, {
      name: 'Dramat',
      id: 'dramat',
      color: 'danger'
    }],
  komedia: [
    {
      name: 'Romantyczna',
      id: 'romantyczna',
      color: 'dark'
    }, {
      name: 'Akcja',
      id: 'komAkcja',
      color: 'tertiary'
    }, {
      name: 'Dramat',
      id: 'dramat',
      color: 'success'
    }, {
      name: 'Fantasy',
      id: 'fantasy',
      color: 'danger'
    }],
  thriller: [
    {
      name: 'Psychologiczny',
      id: 'psychologiczny',
      color: 'dark'
    }, {
      name: 'Kryminał',
      id: 'kryminal',
      color: 'tertiary'
    }, {
      name: 'Sci-Fi',
      id: 'sci-fi',
      color: 'success'
    }, {
      name: 'Akcja',
      id: 'thrillerAkcja',
      color: 'danger'
    }],
  Akcja: [
    {
      name: 'Strzelanina',
      id: 'strzelanina',
      color: 'dark'
    }, {
      name: 'Samochody',
      id: 'samochody',
      color: 'tertiary'
    }, {
      name: 'Sci-Fi',
      id: 'AkcjaSciFi',
      color: 'success'
    }, {
      name: 'Bijatyka',
      id: 'bijatyka',
      color: 'danger'
    }],
  Horror: [
    {
      name: 'Straszny',
      id: 'straszny',
      color: 'dark'
    }, {
      name: 'Krwawy',
      id: 'krwawy',
      color: 'tertiary'
    }, {
      name: 'Na faktach',
      id: 'horrorNaFaktach',
      color: 'success'
    }, {
      name: 'Parodia',
      id: 'parodia',
      color: 'danger'
    }],
      
};
  constructor() { }
}
