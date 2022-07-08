import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({});

    // Cada vez que hay un cambio en el formState se lanza el createValidators
    useEffect(() => {
        createValidators();
    }, [formState]); 

    // Verficamos si cada valor del formValidation es null (return true),
    // sirve para verificar que el formulario es valido
    const isFormValid = useMemo(() => {

        for (const formValue of Object.keys(formValidation)) {
            if(formValidation[formValue] !== null) return false;
        }
        return true;
    }, [formValidation])
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({...formState, [ name ]: value});
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = ()=>{

        const formCheckedValues ={};

        for (const formField of Object.keys(formValidations)) {
            // console.log(formField)
            const [fn, errorMessage] = formValidations[formField]; 
            // creando una propiedad computada
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        }

        setFormValidation(formCheckedValues);
        // console.log(formCheckedValues);

    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid
    }
}