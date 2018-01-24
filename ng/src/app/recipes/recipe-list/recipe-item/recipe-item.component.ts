import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeList } from 'app/recipes/model/recipe-list.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeData') recipe: RecipeList;

  @Output() selectedRecipe = new EventEmitter<void>();


  onSelected(){
    this.selectedRecipe.emit();
  }

  constructor() { }

  ngOnInit() {
    // console.log(this.recipe)
  }

}
