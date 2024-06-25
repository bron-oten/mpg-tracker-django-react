import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


const DeleteEntry = () => {
  const [ loading, setLoading ] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteEntry = () => {
    setLoading(true);
    axios
    .delete(`http://localhost:5556/mpg/${id}`)
    .then(() => {
      setLoading(false);
      navigate('/contact');
    })
    .catch((error) => {
      setLoading(false);
      alert('An Error happened. Please Check the Console');
      console.log(error);
    });
  };
  return (
    <div  className='p-4 m-8'>
      <h1 className='text-3xl my-4'>Delete Entry</h1>
      {loading ? ('loading') : ""}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure you want to delete this book?</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full'
        onClick={handleDeleteEntry}>
          Yes, Delete it 
         </button>
      </div>
    </div>
  )
}

export default DeleteEntry