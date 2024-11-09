import React from 'react';
import Head from 'next/head';
import Image from 'next/image';





const page = () => {
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

    <a href="" className="hover:text-blue-500">Home</a> 
    <a href="/shop" className="hover:text-blue-500">Shop</a>
    <a href="/about" className="hover:text-blue-500">About</a>
    <a href="#" className="hover:text-blue-500">Contact</a>
         
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
    <h1 className="text-4xl font-extrabold text-white">SHOP</h1>
    
    <button className="mt-7 font-semibold text-balckish px-5 py-0 rounded-md hover:bg-pink-200">
      HOME  SHOP
    </button>
  </div>
</section>









{/* Product Categories */}
<section className="container mx-auto py-20">

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  <div className="bg-gray-100 p-6 text-center">
    <h3 className="font-bold text-xl">Category 1</h3>
     <Image src="/jwell8.jpg" alt="slow net" width={500} height={300} />
  <div className="price-tag font-bold py-1 items-center">RS:499$</div>
    <h3 className=" py-2">  Its versatility makes it a favorite for both casual and formal wear, while its durability ensures lasting quality. </h3>
           
            
</div>



 <div className="bg-gray-100 p-6 text-center">
    <h3 className="font-bold text-xl">Category 2</h3>
    <Image src="/img9.jpg" alt="slow net" width={500} height={300} />
    <div className="price-tag font-bold py-1 items-center">RS:267$</div>
    <p className=" py-2">  The rich luster of silver, often adorned with gemstones or intricate patterns, gives these pieces a majestic allure,
       Royal silver jewelry is the epitome of timeless beauty, capturing the essence of grace and sophistication fit for royalty. </p>
          
</div>
            

         <div className="bg-gray-100 p-6 text-center">
            <h3 className="font-bold text-xl">Category 3</h3>
             <Image src="/jwell2.jpg" alt="slow net"width={500} height={300} />
             <div className="price-tag font-bold py-1 items-center">RS:300$</div>
            <p className=" py-2 items-center"> this set adds a playful yet elegant touch to any look. The vibrant blue hues of the butterflies 
              stand out against the subtle silver, making these pieces perfect for both casual and formal occasions.
            </p >
          </div>
            


          <div className="bg-gray-100 p-6 text-center">
            <h3 className="font-bold text-xl">Category 4</h3>
            <Image src="/jwell1.jpg" alt="slow net"width={500} height={300} />
            <div className="price-tag font-bold py-1 items-center">RS:299.99$</div>
            <h3 className="fpy-2">  Its minimalist design enhances any outfit, offering a subtle yet stylish touch. 
              Crafted from pure silver, these pieces are perfect for everyday wear, reflecting a balance of sophistication and simplicity. </h3>
          </div>
        


<div className="bg-gray-100 p-6 text-center">
    <h3 className="font-bold text-xl">Category 5</h3>
    <Image src="/watch.jpeg" alt="slow net" width={500} height={300} />
    <div className="price-tag font-bold py-1 items-center">RS:299.99$</div>
            <h3 className=" py-2">  Its minimalist design enhances any outfit, offering a subtle yet stylish touch. 
              Crafted from pure silver, these pieces are perfect for everyday wear, reflecting a balance of sophistication and simplicity. </h3>

</div>


          <div className="bg-gray-100 p-6 text-center">
            <h3 className="font-bold text-xl">Category 6</h3>
            <Image src="/img6.jpg" alt="slow net" width={500} height={300} />
            <div className="price-tag font-bold py-1 items-center">RS:299.99$</div>
            <h3 className=" py-2">  Its minimalist design enhances any outfit, offering a subtle yet stylish touch. 
              Crafted from pure silver, these pieces are perfect for everyday wear, reflecting a balance of sophistication and simplicity. </h3>
          </div>


          <div className="bg-gray-100 p-6 text-center">
            <h3 className="font-bold text-xl">Category 7</h3>
            <Image src="/neckless.jpg" alt="slow net" width={500} height={300} />
            <div className="price-tag font-bold py-1 items-center">RS:299.99$</div>
            <p  className=" py-2">  Its minimalist design enhances any outfit, offering a subtle yet stylish touch. 
              Crafted from pure silver, these pieces are perfect for everyday wear, reflecting a balance of sophistication and simplicity. </p >
          </div>


          <div className="bg-gray-100 p-6 text-center">
            <h3 className="font-bold text-xl">Category 8</h3>
            <Image src="/img7.jpg" alt="slow net" width={500} height={300} />
            <div className="price-tag font-bold py-1 items-center">RS:299.99$</div>
            <p className= "py-2">  Its minimalist design enhances any outfit, offering a subtle yet stylish touch. 
              Crafted from pure silver, these pieces are perfect for everyday wear, reflecting a balance of sophistication and simplicity. </p>
          </div>


          <div className="bg-gray-100 p-6 text-center">
            <h3 className="font-bold text-xl">Category 9</h3>
            <Image src="/brac.jpg" alt="slow net" width={500} height={300} />
            <div className="price-tag font-bold py-1 items-center">RS:299.99$</div>
            <p className="py-2">  Its minimalist design enhances any outfit, offering a subtle yet stylish touch. 
              Crafted from pure silver, these pieces are perfect for everyday wear, reflecting a balance of sophistication and simplicity. </p>
          </div>


          <div className="bg-gray-100 p-6 text-center">
            <h3 className="font-bold text-xl">Category 10</h3>
            <Image src="/ear2.jpeg" alt="slow net" width={500} height={300} />
            <div className="price-tag font-bold py-1 items-center">RS:299.99$</div>
            <p className=" py-2">  Its minimalist design enhances any outfit, offering a subtle yet stylish touch. 
              Crafted from pure silver, these pieces are perfect for everyday wear, reflecting a balance of sophistication and simplicity. </p>
          </div>


          <div className="bg-gray-100 p-6 text-center">
            <h3 className="font-bold text-xl">Category 11</h3>
            <Image src="/ear3.jpg" alt="slow net" width={500} height={300} />
            <div className="price-tag font-bold py-1 items-center">RS:299.99$</div>
            <p className=" py-2">  Its minimalist design enhances any outfit, offering a subtle yet stylish touch. 
              Crafted from pure silver, these pieces are perfect for everyday wear, reflecting a balance of sophistication and simplicity. </p>
          </div>
         


          <div className="bg-gray-100 p-6 text-center">
            <h3 className="font-bold text-xl">Category 12</h3>
            <Image src="/ear5.jpg" alt="slow net" width={500} height={300} />
            <div className="price-tag font-bold py-1 items-center">RS:299.99$</div>
            <p className=" py-2">  Its minimalist design enhances any outfit, offering a subtle yet stylish touch. 
              Crafted from pure silver, these pieces are perfect for everyday wear, reflecting a balance of sophistication and simplicity. </p>
          </div>


         



        
          

          <div className="flex space-x-4 text-center justify-items-center ">
  <button className="bg-indigo-400 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
    1 
  </button>

  
  <button className="bg-indigo-400 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
    2 
  </button>

  
  <button className="bg-indigo-400 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
    3 
  </button>

  <button className="bg-indigo-400 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
    Next
  </button>

</div>

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



  


export default page;

