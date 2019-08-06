export const renderRecipe = recipe => {
    const markup = `
    <!--
    <li>
        <a class="results__link results__link--active" href="#23456">
            <figure class="results__fig">
                <img src="img/test-1.jpg" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">Pasta with Tomato ...</h4>
                <p class="results__author">The Pioneer Woman</p>
            </div>
        </a>
    </li>

    <li>
        <a class="results__link" href="#76767">
            <figure class="results__fig">
                <img src="img/test-2.jpg" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">Pasta Salad with ...</h4>
                <p class="results__author">Spicy Perspective</p>
            </div>
        </a>
    </li>

    <li>
        <a class="results__link" href="#85354">
            <figure class="results__fig">
                <img src="img/test-3.jpg" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">Homemade Tomato ...</h4>
                <p class="results__author">All Recipes</p>
            </div>
        </a>
    </li>

    <li>
        <a class="results__link" href="#43563">
            <figure class="results__fig">
                <img src="img/test-4.jpg" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">Pasta with Tomato ...</h4>
                <p class="results__author">The Pioneer Woman</p>
            </div>
        </a>
    </li>

    <li>
        <a class="results__link" href="#2256665">
            <figure class="results__fig">
                <img src="img/test-5.jpg" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">Greek Pasta with ...</h4>
                <p class="results__author">Chow</p>
            </div>
        </a>
    </li>

    <li>
        <a class="results__link" href="#7567567">
            <figure class="results__fig">
                <img src="img/test-9.jpg" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">Cherry tomato, kale ...</h4>
                <p class="results__author">BBC Good Food</p>
            </div>
        </a>
    </li>

    <li>
        <a class="results__link" href="#5676577">
            <figure class="results__fig">
                <img src="img/test-7.jpg" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">Pasta with Fresh ...</h4>
                <p class="results__author">Chow</p>
            </div>
        </a>
    </li>

    <li>
        <a class="results__link" href="#98798">
            <figure class="results__fig">
                <img src="img/test-8.jpg" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">Buttery Tomato Pasta ...</h4>
                <p class="results__author">Simply Recipes</p>
            </div>
        </a>
    </li>
    <li>
        <a class="results__link" href="#5464646456">
            <figure class="results__fig">
                <img src="img/test-10.jpg" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">Pesto Pasta Salad ...</h4>
                <p class="results__author">Eats Well With Others</p>
            </div>
        </a>
    </li>

    <li>
        <a class="results__link" href="#345345435">
            <figure class="results__fig">
                <img src="img/test-6.jpg" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">Pasta with Roasted ...</h4>
                <p class="results__author">Two Peas and Their Pod</p>
            </div>
        </a>
    </li>
    -->
</ul>

<div class="results__pages">
    <!--
    <button class="btn-inline results__btn--prev">
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-left"></use>
        </svg>
        <span>Page 1</span>
    </button>
    <button class="btn-inline results__btn--next">
        <span>Page 3</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-right"></use>
        </svg>
    </button>
    -->
</div>
</div>



<div class="recipe">

<!--
<figure class="recipe__fig">
    <img src="img/test-1.jpg" alt="Tomato" class="recipe__img">
    <h1 class="recipe__title">
        <span>Pasta with tomato cream sauce</span>
    </h1>
</figure>
<div class="recipe__details">
    <div class="recipe__info">
        <svg class="recipe__info-icon">
            <use href="img/icons.svg#icon-stopwatch"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">45</span>
        <span class="recipe__info-text"> minutes</span>
    </div>
    <div class="recipe__info">
        <svg class="recipe__info-icon">
            <use href="img/icons.svg#icon-man"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">4</span>
        <span class="recipe__info-text"> servings</span>

        <div class="recipe__info-buttons">
            <button class="btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-minus"></use>
                </svg>
            </button>
            <button class="btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-plus"></use>
                </svg>
            </button>
        </div>

    </div>
    <button class="recipe__love">
        <svg class="header__likes">
            <use href="img/icons.svg#icon-heart-outlined"></use>
        </svg>
    </button>
</div>



<div class="recipe__ingredients">
    <ul class="recipe__ingredient-list">
        <li class="recipe__item">
            <svg class="recipe__icon">
                <use href="img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__count">1000</div>
            <div class="recipe__ingredient">
                <span class="recipe__unit">g</span>
                pasta
            </div>
        </li>

        <li class="recipe__item">
            <svg class="recipe__icon">
                <use href="img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__count">1/2</div>
            <div class="recipe__ingredient">
                <span class="recipe__unit">cup</span>
                ricotta cheese
            </div>
        </li>

        <li class="recipe__item">
            <svg class="recipe__icon">
                <use href="img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__count">1</div>
            <div class="recipe__ingredient">
                <span class="recipe__unit"></span>
                can of tomatoes, whole or crushed
            </div>
        </li>


        <li class="recipe__item">
            <svg class="recipe__icon">
                <use href="img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__count">1</div>
            <div class="recipe__ingredient">
                <span class="recipe__unit"></span>
                can tuna packed in olive oil
            </div>
        </li>

        <li class="recipe__item">
            <svg class="recipe__icon">
                <use href="img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__count">1/2</div>
            <div class="recipe__ingredient">
                <span class="recipe__unit">cup</span>
                grated parmesan cheese
            </div>
        </li>

        <li class="recipe__item">
            <svg class="recipe__icon">
                <use href="img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__count">1/4</div>
            <div class="recipe__ingredient">
                <span class="recipe__unit">cup</span>
                fresh basil, chopped or torn
            </div>
        </li>
    </ul>

    <button class="btn-small recipe__btn">
        <svg class="search__icon">
            <use href="img/icons.svg#icon-shopping-cart"></use>
        </svg>
        <span>Add to shopping list</span>
    </button>
</div>

<div class="recipe__directions">
    <h2 class="heading-2">How to cook it</h2>
    <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__by">The Pioneer Woman</span>. Please check out directions at their website.
    </p>
    <a class="btn-small recipe__btn" href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/" target="_blank">
        <span>Directions</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-right"></use>
        </svg>

    </a>
</div>
-->
    `;
};