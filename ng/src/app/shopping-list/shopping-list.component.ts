import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Ingredients } from 'app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [new Ingredients('Apple', 5), new Ingredients('Mango', 5)];

  getIngredients(value: Ingredients) {    
    this.ingredients.push(value);
    // console.log(value);
    
  }

  onRemoveIngredient (id: number){
    this.ingredients.splice(id, 1);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
