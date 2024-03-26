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
    }
}

module.exports =  resolvers;