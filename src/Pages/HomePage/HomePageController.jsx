import { useState } from 'react';
import HomePageView from './HomePageView';

// Project Imports

const HomePageController= () => {
    ///////////
    // Model //
    ///////////
    // Deck
    const [deck, setDeck] = useState([]);

    // Card
    // const card = [
    //     cardID,
    //     cardWord
    // ];

    ////////////////
    // Controller //
    ////////////////
    // function createDeck(deckID, deckName){

    // }

    // function createCard(cardName){
        
    // }

    // function setCardIntoDeck(cardID, deckID){
    //     let builtDeck = [
    //         cardID,
    //         deckID
    //     ];

    //     return setDeck(lastDeck => [...deck, builtDeck]);
    // }

    //////////
    // View //
    //////////

    return(
        <HomePageView/>
    );
}

export default HomePageController;