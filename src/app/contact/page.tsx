import React from 'react'

import Head from 'next/head';

const Contact = () => {
  return (
    <div>
      <Head>
      <title>Simple E-Commerce</title>
      <meta name="description" content="E-Commerce store" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

     {/* Header */}
  
     <header className="bg-white shadow-md">
     <div className="container mx-auto px-4 py-4 flex justify-between items-center">
       <div className="text-2xl font-bold">jeveluxe</div>


 <nav className="space-x-12">

    <a href="/" className="hover:text-blue-500">Home</a> 
    <a href="/shop" className="hover:text-blue-500">Shop</a>
    <a href="/about" className="hover:text-blue-500">About</a>
    <a href="/contact" className="hover:text-blue-500">Contact</a>
         
   </nav>
    <div className="flex items-center">
    <input 
      type="text" 
      className="border rounded-md px-4 py-2" 
      placeholder="Search products..."
/>
    </div>
</div>
      </header>


{/* Hero section */}

<section
  className="relative bg-center bg-cover bg-no-repeat h-60"
  style={{
    backgroundImage: "url('/shop.jpg')",  // Replace with your image URL
  }}
>
 <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay */}
  
<div className="relative z-9 flex flex-col items-center justify-center h-full text-center mg-top">
    <h1 className="text-4xl font-extrabold text-white">Contact</h1>
    
    <button className="mt-7 font-semibold text-balckish px-5 py-0 rounded-md hover:bg-pink-200">
      HOME  SHOP
    </button>
</div>


<div className=' text-center py-20  mb-10'>
<h1 className='font-extrabold text-3xl'>Get in touch with us</h1>
<p>for more information about our jwellery product & services.
Please feel free to drop us an email our staff always be there to help you out.Dont hesitate!</p>

</div>



{/* hero section of user deatail */}
<div className='flex justify-center items-center space-x-28 mt-32'>



{/* our info */}
<div className='px-7 space-y-3 '>

<h1 className='font-extrabold '>Address</h1>
<p>house-19 sector 2 ABC suciety karachi pakistan </p>

<h1 className='font-extrabold  '>Phone</h1>
<p>Mobile: +(92)303*****75 </p>
<p>Hotline: +(92)303*****75 </p>

<h1 className='font-extrabold'>Working time</h1>
<p>Monday to friday 9:00 to 22:00</p>
<p>Saturday to sunday 9:00 to 21:00</p>

</div>

{/* User infoo */}
<div className=' space-y-5 '>
  
<h2 className='font-bold '>Name</h2>
<input type="text" className=' max-w-lg p-2 px-24 border border-gray-300 rounded-md focus:outline-none
   focus:ring-2 focus:ring-blue-500 focus:border-transparent' />

<h2 className='font-bold'>Email address</h2>
  <input type="text" className='max-w-lg p-4 px-24 border border-gray-300 rounded-md focus:outline-none
   focus:ring-2 focus:ring-blue-500 focus:border-transparent' />


  <h2 className='font-bold '>Subject</h2>
  <input type="text" className=' border border-gray-300 rounded-md max-w-lg p-4 px-24 focus:ring-2 focus:ring-blue-500 focus:border-transparent' />

  <h2 className='font-bold ' lines-5>Message </h2>
  <textarea id="message" name="message" className="w-full max-w-lg p-2 border border-gray-300 rounded-md focus:outline-none
   focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Write your message here..."></textarea>

  <button className='mt-10 bg-amber-700 px-24 py-2 rounded-md hover:bg-amber-800'>Submit</button>

</div>

</div>

{/* Footer */}

<footer className="bg-white text-black py-10 ">
   <div className=" flex text-center bg-gray-700 space-x-28 mt-32 justify-items-center text-xl">
 <div>
   <h1 className="font-extrabold text-black ">jeveluxe</h1>
   <p>400 university drive suite 200 carol globes,</p>
   <p>FL 33134 USA</p>
  </div>
  
        
  </div>
  </footer>

</section>





    </div>





  )
}

export default Contact