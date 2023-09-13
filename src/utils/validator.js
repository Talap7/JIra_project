export const validator = (data, config) => {
    const errors = {};

    function validate (validateMethod, data, config) {
        switch(validateMethod) {
            case "isRequired":
                if(data.trim() === "") return config.message
                break
            case "invalidEmail":   
                if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data)) return config.message
                break
            case "isCapital":
                if(!/[A-Z]+/g.test(data)) return config.message
                break
            case "isContainDigit": 
                if(!/\d+/g.test(data)) return config.message
                break
            case "min": 
                if(data.length < 8) return config.message
                break
            case "passwordMatch":
                if (data !== config.otherField) return config.message;
                break;
            default:
                break
        }

    }


    for(const fieldName in data) {
        for(const validateMethod in config[fieldName]) {
                const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod])
                if(error && !errors[fieldName]) {
                    errors[fieldName] = error
                }
        }
        
    }
    return errors
}