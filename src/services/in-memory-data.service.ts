import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
//import { Student } from 'src/models/student';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      { id:  1, firstname: 'Yassine', lastname: 'Bono' },
      { id:  5, firstname: 'Nayef', lastname: 'Aguerd' },
      { id: 19, firstname: 'Youssef', lastname: 'Enesyri' },
      { id:  6, firstname: 'Romain', lastname: 'Saiss' }, 
      { id:  20, firstname: 'Achraf', lastname: 'Dari' }, 
      { id:  18, firstname: 'Jawad', lastname: 'El Yamiq' }, 
      { id:  2, firstname: 'Achraf', lastname: 'Hakimi' }, 
      { id:  3, firstname: 'Noussair', lastname: 'Mazraoui' }, 
      { id:  4, firstname: 'Sofyan', lastname: 'Amrabat' }, 
      { id:  8, firstname: 'Azzedine', lastname: 'Ounahi' }, 
      { id:  11, firstname: 'Abdelhamid', lastname: 'Sabiri' }, 
      { id:  7, firstname: 'Hakim', lastname: 'Ziyech' }, 
      { id:  14, firstname: 'Zakaria', lastname: 'Aboukhlal' }
    ];
    return {students};
  }

  /*  mafhmthach
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  */
}