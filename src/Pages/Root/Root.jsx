import React from 'react'
import { Outlet } from 'react-router-dom'
import TopHeader from '../../Components/Header/TopHeader/TopHeader'

const Root = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Outlet></Outlet>
        </div>
    )
}

export default Root
