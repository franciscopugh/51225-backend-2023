import { Schema, model } from "mongoose";

const studentSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        index: true
    },
    gender: {
        type: String,
        required: true
    },
    courses: {
        type: [
            {
                id_course: {
                    type: Schema.Types.ObjectId,
                    ref: "courses"
                }
            }
        ],
        default: []
    }
});
export const studentModel = model("students", studentSchema);