import Starship from '../../../models/Starship';

const StarshipResolver = {
    Query: {
        starship: (root, args) => {
            return new Promise((resolve, reject) => {
                Starship.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        starships: () => {
            return new Promise((resolve, reject) => {
                Starship.find({}).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    },
    Mutation: {
        addStarship: (root, { name, manufacturer, model, costInCredits, imagePath }) => {
            const starship = new Starship({ name, manufacturer, model, costInCredits, imagePath });

            return new Promise((resolve, reject) => {
                starship.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        editStarship: (root, { _id, name, manufacturer, model, costInCredits, imagePath }) => {
            return new Promise((resolve, reject) => {
                Starship.findOneAndUpdate({ _id }, { $set: { name, manufacturer, model, costInCredits, imagePath } })
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    });
            });
        },
        deleteStarship: (root, { _id }) => {
            return new Promise((resolve, reject) => {
                Starship.findOneAndRemove({ _id }).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    }
};

export default StarshipResolver;