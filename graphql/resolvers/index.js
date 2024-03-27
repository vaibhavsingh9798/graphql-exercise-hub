const db = require('../../data/db')

const resolvers = {

    Query :{
       
        games(){
            return db.games
        },

        game(_,args){
           return db.games.find((game) => game.id === args.id)
        },

        reviews(){
            return db.reviews
        },

        review(_,args){
            return db.reviews.find((review) => review.id === args.id)
        },

        authors(){
            return db.authors
        },

        author(_,args){
            return db.authors.find((author) => author.id === args.id )
        },
    },
    Game :{
           reviews(parent){
               return db.reviews.filter((r) => r.game_id === parent.id)
           }   
    },
    Review :{
               game(parent){
                  return db.games.filter((g) => g.id === parent.game_id)
               },

               author(parent){
                return db.authors.filter((a) => a.id === parent.author_id)
               }
    },
    Author:{
         reviews(parent){

            return db.reviews.filter((r) =>  r.author_id === parent.id)
         } 
    },

    Mutation :{

        deleteGame(_,args){

            db.games = db.games.filter((g) => g.id !== args.id)
            return db.games;
        },

        addGame(_,args){
            
            let game = {...args.game , id : Math.floor(Math.random() * 1000).toString() }

            db.games.push(game)
            return game;
        },

        updateGame(_,args){

              db.games =  db.games.map((g) =>{
                if(g.id === args.id){
                return {...g,...args.edits}
                }else{
                    return g;
                }
              })

              return db.games.find((g) => g.id === args.id)
        },
    }
}

module.exports =  resolvers;