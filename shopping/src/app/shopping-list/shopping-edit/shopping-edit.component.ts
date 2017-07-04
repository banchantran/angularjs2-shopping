import {Component, OnInit, ViewChild, Output, EventEmitter, ElementRef} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') name: ElementRef;
    @ViewChild('amountInput') amount: ElementRef;
    @Output() addIngredient = new EventEmitter<Ingredient>();

    constructor() {
    }

    ngOnInit() {
    }

    onAddIngredient() {
        const nameValue = this.name.nativeElement.value;
        const amountValue = this.amount.nativeElement.value;
        const ingredient = new Ingredient(nameValue, amountValue);
        this.addIngredient.emit(ingredient);
    }
}
