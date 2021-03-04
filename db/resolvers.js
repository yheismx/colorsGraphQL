const Color = require('../models/Color');





//Resolvers
const resolvers = {
    Query: {
        
       

        getColors: async() => {
            try {
                const colors = await Color.find({});
                return colors;
            } catch (error) {
                console.log(error)
            }
        },

        getColorsRed: async() => {
            try {
                const colors = await Color.find({name : /Red/});
                return colors;
            } catch (error) {
                console.log(error)
            }
        },

        getColorsOrange: async() => {
            try {
                const colors = await Color.find({name : /Orange/});
                return colors;
            } catch (error) {
                console.log(error)
            }
        },

        getColorsYellow: async() => {
            try {
                const colors = await Color.find({name : /Yellow/});
                return colors;
            } catch (error) {
                console.log(error)
            }
        },

        getColorsGreen: async() => {
            try {
                const colors = await Color.find({name : /Green/});
                return colors;
            } catch (error) {
                console.log(error)
            }
        },

        getColorsBlue: async() => {
            try {
                const colors = await Color.find({name : /Blue/});
                return colors;
            } catch (error) {
                console.log(error)
            }
        },

        getColorsPurple: async() => {
            try {
                const colors = await Color.find({name : /Purple/});
                return colors;
            } catch (error) {
                console.log(error)
            }
        },

        getColorsBrown: async() => {
            try {
                const colors = await Color.find({name : /Brown/});
                return colors;
            } catch (error) {
                console.log(error)
            }
        },

        getColorsGray: async() => {
            try {
                const colors = await Color.find({name : /Gray/});
                return colors;
            } catch (error) {
                console.log(error)
            }
        },

        getFilteredColors: async(_, {input}) => {
            const {colorName} = input;
            try {
                const colors = await Color.find({ name : { $regex : colorName } } );
                return colors;
            } catch (error) {
                console.log(error);
            }
            
            
        }

       
        
    }
}

module.exports = resolvers;