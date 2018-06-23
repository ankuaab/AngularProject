import { Component } from '@angular/core';
import {  MarvellousCompComponent } from './marvellous-comp/marvellous-comp.component';

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title='appMarvellous';
  var1=this.title.length;
  var2=this.title.toUpperCase();
  public fun() {
   return 2*3;
  }
  public gun()
  {
return 'Hello';

  }
    
  
  name='Marvellous';
}

