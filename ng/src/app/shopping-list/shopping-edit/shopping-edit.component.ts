import { 
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ViewChild, 
  ElementRef,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import { Ingredients } from 'app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ShoppingEditComponent implements 
  OnInit,
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy 
  {
  @Output()
  emitObjectAdd = new EventEmitter<Ingredients>();

  @ViewChild('shoppingAmoutInput') shoppingAmountInput: ElementRef;
  
  onAddShopping(shoppingName: HTMLInputElement) {
    if (shoppingName.name !== "" && this.shoppingAmountInput.nativeElement.value !== ""){
      const ingName = shoppingName.value;
      const ingAmount = this.shoppingAmountInput.nativeElement.value;
      const newIngredient = new Ingredients(ingName, ingAmount);
      this.emitObjectAdd.emit(newIngredient);
    }
  }

  // addShoppingList(formData: NgForm){
  //   console.log('Successful registration');
  //   if (formData.value.name !== "" && formData.value.amount !== ""){
  //     this.emitObjectAdd.emit(new Ingredients(formData.value.name, formData.value.amount));
  //     // console.log(formData.value);
  //     formData.resetForm();
  //   }
  // }
  addIngredient (name, amount){
    if (name !== "" && amount !== ""){
      // this.ingredients.push(new Ingredients(name, amount));
      // this.emitObjectAdd.emit(new Ingredients(name, amount));
    }
  }
 
  constructor() { 
    console.log('constructor called!');
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }
  ngDoCheck(){
    // console.log('ngDoCheck called!');
  }
  ngAfterContentInit(){
    // console.log('ngAfterContentInit called!');
  }
  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit(){
    // console.log('ngAfterViewInit called!');
  }
  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked called!');
  }
  ngOnDestroy(){
    // console.log('ngOnDestroy called!');
  }
}
