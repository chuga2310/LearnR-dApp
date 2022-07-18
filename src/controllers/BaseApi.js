
    function success (data, message = "Successful", statusCode = 200, errors = []) {
        return {
            data : data,
            message : message,
            statusCode : statusCode,
            errors : errors
        };
    }
    
    function error (data, message = "Error", statusCode = 500, errors = []) {
        return {
            data : data,
            message : message,
            statusCode : statusCode,
            errors : errors
        };
    }
    


export { success, error};