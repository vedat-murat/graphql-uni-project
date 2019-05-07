import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PlanetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rotationPeriod: {
        type: String,
        required: false
    },
    orbitalPeriod: {
        type: String,
        required: false
    },
    diameter: {
        type: String,
        required: false
    },
    imagePath: {
        type: String,
        required: false
    }
});

const Planet = mongoose.model("Planet", PlanetSchema);

export default Planet;