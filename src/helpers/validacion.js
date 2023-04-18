import validator from 'validator';
import isEmail from 'validator/lib/isEmail';

const validacion = (values) =>{
    const {mascota, nombre, email, alta, sintomas} = values
    

    if (mascota === '') {
        return {msj:'Todos los campos son obligatorios', campo:'mascota'}
    }

    if (nombre === '') {
        return {msj:'Todos los campos son obligatorios', campo:'nombre'}
    }

    if (!isEmail(email)) {
        return {msj:'Correo no valido', campo:'email'} 
    }

    if (!validator.isDate(alta)) {
        return {msj:'Registre una fecha valida', campo:'alta'} 
    }
    
    if (sintomas ==='') {
        return {msj:'Todos los campos son obligatorios', campo:'sintomas'} 
    }
    

    return {}
}

export default validacion