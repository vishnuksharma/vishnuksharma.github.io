import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeList } from '../model/recipe-list.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipesList: RecipeList[] = [
    new RecipeList('Test recipe 1', 'this is test recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new RecipeList('Test recipe 2', 'this is test recipe', 'https://lh5.ggpht.com/fUo_3qJxeY6_EA1NTaOPc-wrG1t-TA8DKPidRrrwvTzdxKZ3RPw-CuZ3TLm9mgkrvfE=w300'),
    new RecipeList('Test recipe 3', 'this is test recipe', 'http://www.kitchensofindia.com/Data/images/introIMG.png'),
    new RecipeList('Test recipe 4', 'this is test recipe', 'http://newhotelmayur.in/wp-content/uploads/2014/11/cant-1.png')
  ];

  @Output() selectedRecipeItem = new EventEmitter<RecipeList>();

  onSelectedRecipe(recipe: RecipeList){
    this.selectedRecipeItem.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
