import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent {

  lowerName: string = 'maewa';
  upperName: string = 'maewa';
  name: string = 'maEwa RodriGuEz';


  ngOnInit(): void {
  }

}
