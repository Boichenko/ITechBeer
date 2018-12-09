import  { remove }  from 'lodash';

export default {
    getFavorites: () => {
        let beers;
        try {
            const beersJson = localStorage.getItem('favorite_beers') || [];
            beers = JSON.parse(beersJson);
        } catch {
            beers = [];
        }
        return beers;
    },

    addFavorite: (id) => {
        try {
            const beersJson = localStorage.getItem('favorite_beers');
            const beers = JSON.parse(beersJson);
            beers.push(id);
            localStorage.setItem('favorite_beers', JSON.stringify(beers));
        } catch {
            localStorage.setItem('favorite_beers', JSON.stringify([]));
        }
    },

    removeFavorite: (id) => {
        try {
            const beersJson = localStorage.getItem('favorite_beers');
            const beers = JSON.parse(beersJson);
            remove(beers, item => item === id);
            localStorage.setItem('favorite_beers', JSON.stringify(beers));
        } catch {
            localStorage.setItem('favorite_beers', JSON.stringify([]));
        }
    }
};