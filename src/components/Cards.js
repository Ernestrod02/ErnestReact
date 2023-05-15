import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Get to know me!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/lily.jpg'
              text='My Pets'
              label='Lily'
              path='/mypets'
            />
            <CardItem
              src='images/yellowstone.jpg'
              text="Where I've been"
              label='Yellowstone'
              path='/been'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/miami.jpg'
              text="Where I'm from"
              label='Miami'
              path='/from'
            />
            <CardItem
              src='images/sushi.jpeg'
              text='Favorite Foods'
              label='Sushi'
              path='/food'
            />
            <CardItem
              src='images/coding.jpeg'
              text='What do I do?'
              label='IT'
              path='/job'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
