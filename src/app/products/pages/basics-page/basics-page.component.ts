import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower : string = 'yeison';
  public nameUpper : string = 'YEISON';
  public fullName : string = 'YeIsOn RamiReZ';

  public customDate: Date = new Date();

}
