import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import { elements, renderLoader, clearLoader } from './views/base';

// GLOBAL STATE OF APP
const state = {};

// SEARCH CONTROLLER

const controlSearch = async () => {
    const query = searchView.getInput();

    if (query) {
        state.search = new Search(query);

        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            await state.search.getResults();
            clearLoader();
    
            searchView.renderResults(state.search.result)
        } catch (err) {
            alert("Error with search");
            clearLoader();
        }
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    };
});

// RECIPE CONTROLLER

const controlRecipe = async () => {
    // Get ID from url
    const id = window.location.hash.replace('#', '');

    if (id) {
        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Highlight selected search item
        if (state.search) {
            searchView.highlightSelected(id);
        }

        // Create new recipe object
        state.recipe = new Recipe(id);

        try {
            // Get recipe data and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();
    
            // Calculate time and servings
            state.recipe.calcTime();
            state.recipe.calcServings();
    
            // Render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);

        } catch (err) {
            alert("Error getting recipe");
        }
    }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

// LIST CONTROLLER

const controlList = () => {
    // Create a new list if there is none yet
    if (!state.list) state.list = new List();

    // Add each ingredient to the list and UI
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
}

// Handle delete and update list item events
elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;

    // Handle delete button
    if (e.target.matched('.shopping__delete','.shopping__delete *' )) {
        // delete from state
        state.list.deleteItem(id);

        // Delete from UI
        listView.deleteItem(id);
    }
});

// Handling Recipe Button Clicks
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
        // Decrease button is clicked
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
    } else if (e.target.matches('.btn-increase, .btn-increase *')) {
        // Increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        controlList();
    }
});

window.l = new List();