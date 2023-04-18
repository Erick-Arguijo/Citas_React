import React from 'react'
import { Card } from './Card'

export const SeguimientoPaciente = ({ notas, setnotas, seteditar, setactivo }) => {

    const eliminarNota = (index) => {
        //console.log(index)
        const eliminar = notas.filter(nota => nota.id !== index)
        //console.log(eliminar)
        setnotas(eliminar)
        setactivo({ ok: true, msj: 'Eliminado con Exito!' })
    }

    const editarNota = (index) => {
        const editar = notas.filter(nota => nota.id === index)
        //console.log(editar)
        seteditar(editar[0])
    }


    return (
        <div className='md:overflow-y-scroll md:h-screen'>
            {notas.length === 0 ?
                <div>
                    <h1 className="font-bold text-center text-4xl">No hay pacientes</h1>
                    <h5 className='text-center font-bold my-5'>Comienza agregando pacientes <span className="text-indigo-600">y apareceran en este lugar</span></h5>
                </div>
                :
                <div>
                    <h1 className="font-bold text-center text-4xl">Lista de pacientes</h1>
                    <h5 className='text-center font-bold my-5'>Administra tus <span className="text-indigo-600">Pacientes y Citas</span></h5>
                    {notas.map(nota => 
                        <Card key={nota.id} 
                            nota={nota} 
                            eliminarNota={eliminarNota} 
                            editarNota={editarNota} 
                        />)}
                </div>
            }
        </div>
    )
}
