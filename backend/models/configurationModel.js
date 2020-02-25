import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ConfigurationSchema = new Schema({
    ipAddressPi: {
        type: String,
        required: false
    },
    orgId:  {
        type: String,
        required: false
    },
    pods: {
        podId:  {
            type: String,
            required: false
        },
        podType:  {
            type: String,
            required: false
        },
        podSensitivity:  {
            type: String,
            required: false
        },
        podIpAddress:  {
            type: String,
            required: false
        },
        podMacAddress:  {
            type: String,
            required: false
        },
    }
})