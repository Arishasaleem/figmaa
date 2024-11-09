
import Head from "next/head";
import Image from "next/image";


export default function Home() {
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




      {/* Hero Section */}

      <section
  className="relative bg-center bg-cover bg-no-repeat h-screen"
  style={{
    backgroundImage: "url('/front.jpg')",  // Replace with your image URL
  }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay */}
  
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
    <h1 className="text-5xl font-bold text-white">Welcome to Timeless Jewelry</h1>
    <p className="mt-4 text-lg text-gray-300">
      Discover elegance in every piece.
    </p>
    <button className="mt-8 bg-white text-purple-300 px-6 py-2 rounded-md hover:bg-pink-200">
      Shop Now
    </button>





  </div>


  <div className=" text-center">
  <h1 className="text-2xl py-5 font-extrabold">Browse The Range</h1>
  <p>Loren ipsum dolor sit amet consectetur edipiscing elit</p>

  
</div>

</section>




   

{/* Product Categories */}



<section className="container mx-auto py-32">
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  <div className="bg-gray-100 p-6 text-center">
 <h3 className="font-bold text-xl">Category 1</h3>
  <Image src="/jwell8.jpg" alt="slow net" className="h-60 w-80" width={500} height={300}/>
          
            
</div>


  <div className="bg-gray-100 p-6 text-center">
   <h3 className="font-bold text-xl">Category 2</h3>
   <Image src="/img9.jpg" alt="slow net" className="h-60 w-80" width={500} height={300} />
           
 </div>
            

<div className="bg-gray-100 p-6 text-center">
     <h3 className="font-bold text-xl h-14">Category 3</h3>
        <Image src="/jwell2.jpg" alt="slow net" className="h-60 w-80" width={500} height={300} />
            
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
  
  );
}