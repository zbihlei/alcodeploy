import { mongoose } from "mongoose";


const GeneralSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const General = mongoose.model('general', GeneralSchema);

export default General;