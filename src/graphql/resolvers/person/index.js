import Person from '../../../models/Person';

const PersonResolver = {
    Query: {
        person: (root, args) => {
            return new Promise((resolve, reject) => {
                Person.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        people: () => {
            return new Promise((resolve, reject) => {
                Person.find({}).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    },
    Mutation: {
        addPerson: (root, { name, birthDate, height, gender, imagePath }) => {
            const person = new Person({ name, birthDate, height, gender, imagePath });

            return new Promise((resolve, reject) => {
                person.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        editPerson: (root, { _id, name, birthDate, height, gender, imagePath }) => {
            return new Promise((resolve, reject) => {
                Person.findOneAndUpdate({ _id }, { $set: { name, birthDate, height, gender, imagePath } })
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    });
            });
        },
        deletePerson: (root, { _id }) => {
            return new Promise((resolve, reject) => {
                Person.findOneAndRemove({ _id }).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    }
};

export default PersonResolver;