import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'http://images.media-allrecipes.com/userphotos/250x250/00/00/14/1486.jpg'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'http://images.media-allrecipes.com/userphotos/250x250/00/00/14/1486.jpg')
    ];

    constructor() {
    }

    ngOnInit() {
    }

    onSelectedRecipe(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }
}
