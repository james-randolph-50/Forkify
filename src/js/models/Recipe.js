import axios from 'axios';
import { key, proxy } from '../config';


export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        } catch (error) {
            console.log("Error: " + error);
            alert('Something went wrong.');
        }
    }

    calcTime() {
        // Rough Estimate: Assuming 15 minutes cook time per every 3 ingredients
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    calcServings() {
        this.servings = 4;
    }

    parseIngredients() {
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'cup', 'pound'];

        const newIngredients = this.ingredients.map(el => {
            // Standardize units
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, unitsShort[i]);
            });

            // Remove parenthesis from recipes
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

            // Parse ingradients into count, unit, and ingredient
            const arrIng = ingredient.split(' ');
            const unitIndex = arrIng.findIndex(el2 => unitsShort.includes(el2));

            let objIng;
            if (unitIndex > -1) {
                // There is a unit

            } else if (parseInt(arrIng[0], 10)) {
                // There is NO unit, but 1st element is a number
            } else if (unitIndex === -1) {
                // There is no unit and no number in 1st position

                objIng = {
                    count: 1,
                    unit: '',
                    ingredient
                }
            }
            return ingredient;
        });
        this.ingredients = newIngredients;
    }
}