const db = require('../../data/db')

const resolvers = {

    Query :{
       
        games(){
            return db.games
        },

        reviews(){
            return db.reviews
        },

        authors(){
            return db.authors
        }
    }
}

console.log('aut',db.authors);
module.exports =  resolvers;