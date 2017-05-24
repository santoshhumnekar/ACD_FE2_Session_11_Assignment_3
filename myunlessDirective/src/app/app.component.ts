import { Component, OnInit } from '@angular/core';
import { MyUnlessDirective } from './my-unless.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hey!';
  val = true;

}
