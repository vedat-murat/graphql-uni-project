import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: false
    },
    height: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    imagePath: {
        type: String,
        required: false
    }
});

const Person = mongoose.model("Person", PersonSchema);

export default Person;