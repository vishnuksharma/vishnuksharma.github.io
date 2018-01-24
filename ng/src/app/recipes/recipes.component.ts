import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RecipeList } from 'app/recipes/model/recipe-list.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class RecipesComponent implements OnInit {
  detailRecipeItem: RecipeList;


  getSelectedItem(selectedItem: RecipeList){
    //console.log(selectedItem);
    this.detailRecipeItem = selectedItem;
  }
  constructor() { }

  ngOnInit() {
  }

}
