import React from 'react'

export const Card = ({ nota, eliminarNota, editarNota }) => {

  const { mascota, nombre, email, alta, sintomas } = nota

  const formatoFecha = () => {
    const opciones = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const fecha= new Date(alta)

    return fecha.toLocaleDateString('es-es', opciones)
    
  }

  return (
    <div className="bg-white mb-5 shadow-lg rounded-md shadow-black-500/50 p-5 mx-5">
      <p> <span className="font-bold uppercase">Nombre:</span> {mascota}</p>
      <p> <span className="font-bold uppercase">Propietario:</span> {nombre}</p>
      <p> <span className="font-bold uppercase">Email:</span> {email}</p>
      <p> <span className="font-bold uppercase">Fecha de Alta:</span> {formatoFecha()}</p>
      <p> <span className="font-bold uppercase">Sintomas:</span> {sintomas}</p>
      <div className='flex justify-between mt-5'>
        <input type='submit' className='cursor-pointer rounded-md px-5 py-1 font-bold text-white 
             bg-blue-500 shadow-sm shadow-blue-500/50 hover:bg-blue-700' value='Editar'
          onClick={() => editarNota(nota.id)}
        />
        <input type='submit' className='cursor-pointer rounded-md px-5 py-1 font-bold text-white
             bg-red-500  shadow-sm shadow-red-500/50 hover:bg-red-700' value='Eliminar'
          onClick={() => eliminarNota(nota.id)}
        />
      </div>
    </div>
  )
}
