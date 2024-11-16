import React from 'react'
import { Link } from 'react-router-dom'

const Dasboard = () => {
  return (
    <>
    <div style={{height:'300px'}} className="container text-center m-5 shadow">
        <h1>Task Management App</h1>
        <div  className="row">
            <div className="col-lg-12 d-flex justify-content-center mt-5">
                <Link className='p-2 ms-5 ' style={{textDecoration:'none',backgroundColor:'blue',color:'white'}} to={'/login'}>Sign In To Your Account</Link>
            </div>
            
        </div>
    </div>
    
    </>
  )
}

export default Dasboard