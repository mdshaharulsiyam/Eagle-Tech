import React, { useContext, useEffect } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { EagleTechSpotContext } from '../Context/Context'

const PrivetRoute = ({ children }) => {
    const localtion = useLocation()
    const { loading, currentuser } = useContext(EagleTechSpotContext)
    if (loading) {
        return false
    }
    if (!currentuser) {
        return <Navigate state={`${localtion.pathname}`} to={'/login'}></Navigate>
    } else {
        return (
            <div className='relative'>
                {
                    loading && <span className="loading absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-10 text-center w-20 loading-spinner text-error"></span>
                }
                {children}
            </div>
        )
    }

}

export default PrivetRoute

