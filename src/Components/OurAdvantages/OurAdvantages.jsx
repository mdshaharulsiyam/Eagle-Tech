import React from 'react'

const OurAdvantages = () => {
    const style = {
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
    }
    return (
        <div className='container mx-auto'>
            <h2 className=' uppercase text-3xl text-center font-bold'>Our Advantages</h2>
            <div className='flex flex-wrap justify-center items-center gap-7 py-10'>
                <div style={style} className='max-w-sm lg:w-96 w-96  md:w-80 h-80 transition-all overflow-hidden rounded hover:scale-110 cursor-pointer' >
                    <h2></h2>
                </div>
            </div>
        </div>
    )
}

export default OurAdvantages
