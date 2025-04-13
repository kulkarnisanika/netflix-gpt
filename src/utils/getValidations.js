import { ValidationType } from "./validationTypes"
export const getValidations = (value, type) => {
    if (type === ValidationType.Email)
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    else if (type === ValidationType.Password) {
        return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(value);
    }
    else if (type === ValidationType.Name)
        return /^[a-zA-Z]+$/.test(value);
    else
        return false;
}