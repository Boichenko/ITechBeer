import { Record } from 'immutable';

const BeerRecord = Record(
    {
        isFetching: null,
        didInvalidate: null,
        id: null,
        error: null,
        beerData: null,
        isLoaded: null
    }
)

export class BeerItemRecord extends Record({
    id: null,
    name: null,
    tagline: null,
    description: null,
    imageUrl: null,
    abv: null,
    ibu: null,
    ebc: null,
    brewersTips: null,
    foodPairing: null,
    ingredients: null,
    method: null,
}) {
    static parse(beerItem) {
        return new BeerItemRecord({
            id:  beerItem.id,
            name: beerItem.name,
            tagline:beerItem.tagline,
            description:beerItem.description,
            imageUrl:beerItem.image_url,
            abv: beerItem.abv,
            ibu: beerItem.ibu,
            ebc: beerItem.ebc,
            brewersTips: beerItem.brewers_tips,
            foodPairing: beerItem.food_pairing,
            ingredients: beerItem.ingredients,
            method: MethodRecord.parse(beerItem.method)
        })
    }
}

export class MethodRecord extends Record({
        mashTemp: null,
        fermentation: null
    }) {
        static parse(methodItem) {
            return new MethodRecord({
                mashTemp: methodItem.mash_temp,
                fermentation: methodItem.fermentation
            })
        }   
    }

export default BeerRecord

