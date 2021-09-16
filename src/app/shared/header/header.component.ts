import { Component, OnInit } from '@angular/core';
import { KinderGarden } from 'src/app/interfaces/kinder-garden';
import { KinderGardenService } from 'src/app/services/kinder-garden.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  private _kinderGarden: KinderGarden;

  get kinderGarden(): KinderGarden{
    return this._kinderGarden;
  }
  constructor(private kinderGardenService: KinderGardenService) {
    this._kinderGarden = this.kinderGardenService.data;
  }

  ngOnInit(): void {
  }

}
