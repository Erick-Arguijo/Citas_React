import React from 'react'

export const Error = ({error}) => {
  return (
    <div className={`mb-2`}>
        <h2 className={`text-center text-red-500 font-bold`}>{error.msj}</h2>
    </div>
  )
}
