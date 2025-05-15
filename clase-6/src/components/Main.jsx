import React from 'react'
<<<<<<< HEAD

const Main = ({data}) => {
  // console.log(data);
  
  return (
    <main className='main'>
        <h2>Contenido Principal</h2>
        <img style={{width:'25%'}} src='https://cdn.pixabay.com/photo/2018/05/30/19/29/kitten-3442257_1280.jpg'/>
=======
import gatito from '../assets/gatito.jpg'

const Main = () => {
  return (
    <main className='main'>
        <h2>Contenido Principal</h2>
        <img src={gatito}/>
        <img src='https://cdn.pixabay.com/photo/2018/05/30/19/29/kitten-3442257_1280.jpg'/>
>>>>>>> 013bd3098f2863a9cc17e823e85ce048b36603fe
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, error labore architecto temporibus animi ipsam magnam mollitia cum. Culpa quae molestias deleniti, voluptates recusandae eligendi dolorum consequatur non repellendus reprehenderit!</p>
    </main>
  )
}

export default Main
