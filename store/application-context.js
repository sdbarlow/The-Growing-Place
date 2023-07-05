import { createContext, useState } from "react";

const ApplicationPageContext = createContext({ 
    hasErrors: false,
    applicationStep: "first",
    setApplicationStep: function () {},
    setHasErrors: function () {},
 });

 export function ApplicationPageContextProvider(props) {

    const [currentPage, setCurrentPage] = useState('first');
    const [errors, setErrors] = useState();

    function setApplicationStepHandler(pageData) {
        setCurrentPage(pageData)
    }

    function setHasErrorsHandler(errorData) {
        setErrors(errorData)
    }

    const context = { page: currentPage, hasErrors: errors, setApplicationStep: setApplicationStepHandler, setHasErrors: setHasErrorsHandler}

    return (
    <ApplicationPageContext.Provider value={context}>
        {props.children}
    </ApplicationPageContext.Provider>
    );
 }

 export default ApplicationPageContext;