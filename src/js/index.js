import axios from 'axios';

async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '771f9a5b4400d39be13af98219a9aa5a';
    try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`)
        const recipes = res.data.recipes
        console.log(recipes);

    } catch (error) {
        alert(error)
    }
};
getResults('ramen');

