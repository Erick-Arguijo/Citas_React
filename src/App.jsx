import { useEffect, useState } from "react";
import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { SeguimientoPaciente } from "./components/SeguimientoPaciente"


function App() {
  const [activo, setactivo] = useState({ok:false, msj:''})
  const [notas, setnotas] = useState([])
  const [editar, seteditar] = useState({})

 useEffect(() => {
    const item = JSON.parse(localStorage.getItem('items'))
    if (item && item.length > 0) {
      setnotas(item)
    }
  }, [])
  

  useEffect(() => {
    //console.log(notas)

    localStorage.setItem('items', JSON.stringify(notas))  
  }, [notas])
  
  

  return (
    <div className="container h-screen mt-10 mx-auto bg-gray-100">
      <Header activo={activo} setactivo={setactivo}/>
      <div className="grid md:grid-cols-2 gap-4 mt-5">
        <Formulario setactivo={setactivo} notas={notas} setnotas={setnotas} editar={editar} seteditar={seteditar}/>
        <SeguimientoPaciente notas={notas} setnotas={setnotas} seteditar={seteditar} setactivo={setactivo}/>
      </div>
    </div>
  )
}

export default App
