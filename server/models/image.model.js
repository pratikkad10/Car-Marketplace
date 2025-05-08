import mongoose from 'mongoose';
const imageSchema = new mongoose.Schema({
   path:{ type: String, required: true },
   filename: { type: String, required: true },
});

const Image = mongoose.model('Image', imageSchema);

export default Image;