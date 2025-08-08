import mongoose  from 'mongoose';

const formSchema = new mongoose.Schema({
     name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    }, 
    retypePassword: {
        type: String,
        required: true
    },
    
})

export const Form = mongoose.models.Form || 
mongoose.model('Form', formSchema)