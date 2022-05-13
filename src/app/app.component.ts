import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  name = 'tamltph13479';
  class = 'we16301';

  students = [
    {
      name: 'tamltph1347',
      id: 'PH1111',
      status: 0
    },
    {
      name: 'tamltph1347',
      id: 'PH2222',
      status: 1
    },
    {
      name: 'tamltph1347',
      id: 'PH3333',
      status: 1
    }
  ];

  champs = [
    {
      name: 'Lucian',
      dame: 400,
      defend: 200,
      speed: 100,
      price: 6300,
      avatar: 'https://oneesports.blob.core.windows.net/cdn-data/sites/4/2021/08/pulsefire-lucian-lien-minh-huyen-thoai1.jpg'
    }
  ]
}