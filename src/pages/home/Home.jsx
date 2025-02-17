import React from 'react'
import Dashboard from '../dashboard/Dashboard'

const Home = () => {
  return (
    <>
    <section className='mt-5'>
        <div className="container mx-auto">
            <h1 className='text-center font-bold text-2xl '>Wellcome to Dashboard</h1>
            <Dashboard/>
        </div>
    </section>
    </>
  )
}

export default Home