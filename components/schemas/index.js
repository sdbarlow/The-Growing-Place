import * as yup from "yup";

export const firstPageSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    middleInitial: yup.string().required("Middle Initial is required"),
    date: yup.string().required("Date is required"),
    address: yup.string().required("Address is required"),
    aptNum: yup.string().required("Apartment Number is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    zipCode: yup.string().required("Zip Code is required"),
    phone: yup.string().required("Phone number is required"),
    dateAvailable: yup.string().required("Date Available is required"),
    socialSecurity: yup.string().required("Social Security Number is required"),
    desiredPay: yup.string().required("Desired Pay is required"),
    position: yup.string().required("Position is required"),
    legalEligibility: yup.string().required("Legal Eligibility is required"),
    felonyBool: yup.string().required("Felony Status is required"),
    felonyExplanation: yup.string().required("Felony Explanation is required"),
    email: yup.string().email("please enter a valid email").required("Email is Required"),
})

export const secondPageSchema = yup.object().shape({
    highSchool: yup.string().required("Highschool Education Required"),
    hsAddress: yup.string().required("Highschool Education Required"),
    hsFrom: yup.string().required("Highschool Education Required"),
    hsTo: yup.string().required("Highschool Education Required"),
    hsGraduate: yup.string().required("Highschool Education Required"),
    diploma: yup.string().required("Highschool Education Required"),
    college: yup.string().max(35, 'maximum characters thirty five'),
    coAddress: yup.string().max(40, 'maximum characters forty'),
    coGraduate: yup.string(),
    coDegree: yup.string(),
    other: yup.string().max(35, 'maximum characters thirty five'),
    oAddress: yup.string().max(40, 'maximum characters forty'),
    oFrom: yup.string(),
    oTo: yup.string(),
    oGraduate: yup.string(),
    oDegree: yup.string()
})