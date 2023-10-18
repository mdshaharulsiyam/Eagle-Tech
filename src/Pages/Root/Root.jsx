import React from 'react'
import { Outlet } from 'react-router-dom'
import TopHeader from '../../Components/Header/TopHeader/TopHeader'
import Navber from '../../Components/Header/Navber/Navber'


const Root = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    )
}

export default Root
