import React from 'react'
import Head from 'next/head'



const About = () => {
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

         <a href="#" className="hover:text-blue-500">Home</a> 
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

     {/* About Us Section */}
     <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold mg-8 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            At Timeless Jewelry, we believe in the power of elegance and the beauty of finely crafted pieces.
            Since 1990, our mission has been to offer premium jewelry that blends timeless beauty with modern sophistication.
            Our artisans pour their heart and soul into each design, creating masterpieces that resonate with every individual.
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            We take pride in our commitment to quality, offering a range of jewelry that celebrates life&apos; special moments.
            Whether you are looking for a symbol of love, a style statement, or a treasured keepsake, we are here to help.
          </p>
        </div>
      </section>




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


     </div>

  )
}

export default About
