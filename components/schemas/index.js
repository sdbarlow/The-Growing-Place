import * as yup from "yup";

export const basicSchema = yup.object().shape({
    email: yup.string().email("please enter a valid email").required("Required"),

})