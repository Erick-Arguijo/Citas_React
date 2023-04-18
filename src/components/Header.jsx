import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const Header = ({activo, setactivo}) => {
  const notify = () => toast(activo.msj);

  useEffect(() => {
    //console.log('Notify activado')
    //console.log(activo)
    if (activo.ok) {
      notify()
      setactivo({ok:false, msj:''})
    }
  }, [activo])

  return (
    <div className="flex justify-center">
        <h1 className='text-5xl text-center font-black uppercase md:w-1/2'>
          Seguimiento Paciente <span className='text-indigo-600'>Veterinario</span>
        </h1>
        <ToastContainer />
    </div>
  )
}
