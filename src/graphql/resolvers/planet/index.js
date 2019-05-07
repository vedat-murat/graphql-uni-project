import Planet from '../../../models/Planet';

const PlanetResolver = {
    Query: {
        planet: (root, args) => {
            return new Promise((resolve, reject) => {
                Planet.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        planets: () => {
            return new Promise((resolve, reject) => {
                Planet.find({}).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    },
    Mutation: {
        addPlanet: (root, { name, rotationPeriod, orbitalPeriod, diameter, imagePath }) => {
            const planet = new Planet({ name, rotationPeriod, orbitalPeriod, diameter, imagePath });

            return new Promise((resolve, reject) => {
                planet.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        editPlanet: (root, { _id, name, rotationPeriod, orbitalPeriod, diameter, imagePath }) => {
            return new Promise((resolve, reject) => {
                Planet.findOneAndUpdate({ _id }, { $set: { name, rotationPeriod, orbitalPeriod, diameter, imagePath } })
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    });
            });
        },
        deletePlanet: (root, { _id }) => {
            return new Promise((resolve, reject) => {
                Planet.findOneAndRemove({ _id }).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    }
};

export default PlanetResolver;