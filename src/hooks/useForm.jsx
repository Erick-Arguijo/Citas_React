import { useState } from "react"

const useForm = ( initialState = {} ) =>{
    const [values, setvalues] = useState(initialState)

    const handleInputChange = (e) =>{
        setvalues({...values, [e.target.name] : e.target.value})
    }
    
    const reset = () =>{
        setvalues(initialState)
    }

    const edit = (values) =>{
        setvalues(values)
    }

    return  { values, handleInputChange, reset, edit} 
}


export default useForm