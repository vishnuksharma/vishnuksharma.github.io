import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // stayle is priority 
  // styles: [`
  //   h3 {
  //     color:blue;
  //   }
  // `]
})
export class AppComponent {
  loadedFeature = 'recipe';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
