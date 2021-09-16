import { Injectable } from '@angular/core';
import { KinderGarden } from '../interfaces/kinder-garden';

@Injectable({
  providedIn: 'root'
})
export class KinderGardenService {
  private _kinderGarden: KinderGarden;

  get data(): KinderGarden{
    return this._kinderGarden;
  }

  constructor() {
    this._kinderGarden = {
      id: 1,
      name: 'Amanecer',
      address: 'Los Arces 179, Tortuguitas, Malvinas Argentinas',
      email: 'jardin_amanecer@email.com',
      tel: '02320-444734',
      logo:'',
      social: [
        {
          name: 'facebook',
          url: '#',
          icon: ''
        },
        {
          name: 'twitter',
          url: '#',
          icon: ''
        },
        {
          name: 'instagram',
          url: '#',
          icon: ''
        }
      ]
    }
  }
}
