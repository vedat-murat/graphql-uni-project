import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const StarshipSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: false
    },
    model: {
        type: String,
        required: false
    },
    costInCredits: {
        type: String,
        required: false
    },
    imagePath: {
        type: String,
        required: false
    }
});

const Starship = mongoose.model("Starship", StarshipSchema);

export default Starship;