import React, { useEffect, useState } from 'react'
import useForm from '../hooks/useForm'
import validacion from '../helpers/validacion'
import { Error } from './Error'

export const Formulario = ({ setactivo, notas, setnotas, editar, seteditar }) => {
  const [error, seterror] = useState({})

  const { values, handleInputChange, reset, edit } = useForm({ mascota: '', nombre: '', email: '', alta: '', sintomas: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    seterror(validacion(values))

    if (Object.entries(editar).length !== 0) {
      //console.log(editar)
      //console.log('Editando')
      const notaEditada = { id: editar.id, ...values}
      const arrayEditado = notas.map(nota => nota.id  === editar.id ? notaEditada : nota )
      setnotas([...arrayEditado])
      seteditar({})
      setactivo({ok:true, msj:'Editado con Exito!'})
      reset()
      return
    }



    if (Object.entries(validacion(values)).length === 0) {
      //console.log('creando')
      const objeto = { id: Math.random().toString(30).substring(2), ...values }
      setactivo({ok:true, msj:'Guardado con Exito!'})
      setnotas([...notas, objeto])
      reset()
      return
    }
  }
  useEffect(() => {
    //console.log(editar)
    if (Object.entries(editar).length !== 0) {
      edit(editar)
    }
  }, [editar])

  return (
    <div className='mb-10'>
      <h3 className={`font-bold text-center text-4xl`}>Seguimiento Pacientes</h3>
      <h5 className={`text-center font-bold my-5`}>Añade Paciente y <span className="text-indigo-600">Administralos</span></h5>
      <form onSubmit={handleSubmit} className='max-md:px-5'>
        <div className='bg-white rounded-md p-5 shadow-lg mt-2'>
          {error?.campo && <Error error={error} />}
          <div className='grid grid-row-2 gap-1'>
            <label htmlFor="mascota" className='font-bold'>NOMBRE MASCOTA</label>
            <input id='mascota' placeholder="Nombre de la Mascota" type="text" name="mascota"
              value={values.mascota} onChange={handleInputChange}
              className={`px-2 py-1 border-solid border-2 border-indigo-200 rounded-md 
               focus:border-indigo-300 focus:outline-none shadow-inner ${error?.campo === 'mascota' && "border-red-500"} 
            `}
            />

          </div>

          <div className='grid grid-row-2 gap-1 mt-2'>
            <label htmlFor="nombre" className='font-bold'>NOMBRE PROPIETARIO</label>
            <input id='mascota' placeholder="Nombre de la Mascota" type="text" name="nombre"
              value={values.nombre} onChange={handleInputChange}
              className={`px-2 py-1 border-solid border-2 border-indigo-200 rounded-md 
               focus:border-indigo-300 focus:outline-none shadow-inner ${error?.campo === 'nombre' && "border-red-500"}
            `}
            />
          </div>

          <div className='grid grid-row-2 gap-1 mt-2'>
            <label htmlFor="email" className='font-bold'>Email</label>
            <input id='mascota' placeholder="Email Contacto" type="email" name="email"
              value={values.email} onChange={handleInputChange}
              className={`px-2 py-1 border-solid border-2 border-indigo-200 rounded-md 
               focus:border-indigo-300 focus:outline-none shadow-inner ${error?.campo === 'email' && "border-red-500"}
              `}
            />
          </div>

          <div className='grid grid-row-2 gap-1 mt-2'>
            <label htmlFor="alta" className='font-bold'>ALTA</label>
            <input id='alta' type="date" name="alta"
              value={values.alta} onChange={handleInputChange}
              className={`px-2 py-1 border-solid border-2 border-indigo-200 rounded-md 
            focus:border-indigo-300 focus:outline-none shadow-inner ${error?.campo === 'alta' && "border-red-500"}
            `}
            />
          </div>

          <div className='grid grid-row-2 gap-1 mt-2'>
            <label htmlFor="sintomas" className='font-bold'>SINTOMAS</label>
            <textarea id='sintomas' placeholder="Nombre de la Mascota" type="text" name="sintomas"
              value={values.sintomas} onChange={handleInputChange}
              className={`px-2 py-1 border-solid border-2 border-indigo-200 rounded-md 
            focus:border-indigo-300 focus:outline-none shadow-inner ${error?.campo === 'sintomas' && "border-red-500"}
  `}
            />
          </div>

          {Object.entries(editar).length === 0 ?
          <input type='submit' value="Guardar"
            className='px-2 py-1 bg-indigo-400 border-solid rounded-md mt-5 w-full font-bold shadow-inner 
          border-2 border-black text-lg cursor-pointer hover:bg-indigo-500'
          />
          :
          <input type='submit' value="Editar"
            className='px-2 py-1 bg-indigo-400 border-solid rounded-md mt-5 w-full font-bold shadow-inner 
          border-2 border-black text-lg cursor-pointer hover:bg-indigo-500 transition-all'
          />
          }

        </div>
      </form>


    </div>
  )
}
