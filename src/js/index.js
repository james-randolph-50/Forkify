import Search from './models/Search';

// GLOBAL STATE OF APP
const state = {};

const controlSearch = () => {

}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})

const search = new Search('ramen');
// console.log(search);
// search.getResults();///