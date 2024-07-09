import React from 'react';
import './MyLibrary.css';
import GameCard from '../components/GameCard';

function MyLibrary({ games, reference }) {
  return (
    <div className="my-library row">
      {
        games.length === 0 ? (
          <h2 className='my-library-empty'>Your library is empty</h2>
        ) : (
          games.map(game => <GameCard key={game._id} game={game} className="my-library-gameCard" />)
        )
      }
    </div>
  );
}

export default MyLibrary;