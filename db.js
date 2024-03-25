let games = [
    {id: '1', title: 'The Legend of Zelda: Breath of the Wild', platform: ['Nintendo Switch']},
    {id: '2', title: 'Final Fantasy VII Remake', platform: ['PlayStation 5', 'Xbox Series X']},
    {id: '3', title: 'Elden Ring', platform: ['PlayStation 5', 'Xbox Series X', 'PC']},
    {id: '4', title: 'Mario Kart 8 Deluxe', platform: ['Nintendo Switch']},
    {id: '5', title: 'Pokémon Brilliant Diamond and Shining Pearl', platform: ['Nintendo Switch']}
  ];
  
  let authors = [
    {id: '1', name: 'John Doe', verified: true},
    {id: '2', name: 'Jane Smith', verified: false},
    {id: '3', name: 'David Brown', verified: true}
  ];
  
  let reviews = [
    {id: '1', rating: 9, content: 'Absolutely loved it! A must-play for all gamers.', author_id: '1', game_id: '2'},
    {id: '2', rating: 8, content: 'Incredible story and gameplay. Can\'t wait for the sequel.', author_id: '2', game_id: '1'},
    {id: '3', rating: 7, content: 'Good game overall, but a bit repetitive at times.', author_id: '3', game_id: '3'},
    {id: '4', rating: 6, content: 'Fun racing game, but lacks depth compared to other titles.', author_id: '2', game_id: '4'},
    {id: '5', rating: 8, content: 'Fantastic remake with faithful nods to the original. A nostalgic journey.', author_id: '2', game_id: '5'},
    {id: '6', rating: 7, content: 'Enjoyable gameplay experience, although a bit challenging.', author_id: '1', game_id: '2'},
    {id: '7', rating: 9, content: 'An absolute masterpiece! Captivating storyline and stunning visuals.', author_id: '3', game_id: '1'}
  ];
  
module.exports = {games, authors, reviews}
  