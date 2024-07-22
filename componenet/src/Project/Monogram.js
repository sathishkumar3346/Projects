import React from 'react'
import './Monogram.css'

const Monogram = () => {
      const arr=[{
        imgUrl:"https://cdn.shopify.com/s/files/1/0974/7950/products/Everyday-Bundle-Mocks-horizontal_1920x1281_crop_center.jpg.webp?v=1668446709",
        title:"MINI CONSOLE",
        order:"PRE-ORDER",
        price:"CA$347",
        description:"Ideal for everyday shortcuts. Adaptable to any workflow."
      },{
        imgUrl:"https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_TravelerBracket1_Monogram_May2020_4561_30a35bd4-01b4-44db-894a-e06162d8ab77_1920x1280_crop_center.jpg.webp?v=1668433146",
        title:"AUDIO CONSOLE",
        order:"PRE-ORDER",
        price:"CA$694",
        description:"Ideal for music & audio. Adaptable to any workflow."
      },{
        imgUrl:"https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_StudioBracket1_Monogram_May2020_4558_53685b21-b09f-45b0-85a2-180d6acfafac_1920x1280_crop_center.jpg.webp?v=1668433210",
        title:"PHOTO CONSOLE",
        order:"PRE-ORDER",
        price:"CA$833",
        description:"Ideal for photo & video. Adaptable to any workflow."
      },{
        imgUrl:"https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_MasterBracket1_Monogram_May2020_4555_1920x1280_crop_center.jpg.webp?v=1668433240",
        title:"VIDEO CONSOLE",
        order:"PRE-ORDER",
        price:"CA$1,251",
        description:"Ideal for Video & Film. Adaptable to any workflow."
      },

      ];
  
const products = [
  {
    name: "Monogram Keyboard",
    price: "CA$555",
    availability: "Pre-Order",
    imageUrl: "https://cdn.shopify.com/s/files/1/0974/7950/files/preview_images/d1564dbc344144d594c1e602d3ab46d7.thumbnail.0000000000_1920x1080_crop_center.jpg.webp?v=1712243546" 
  },
  {
    name: "Monogram Multipad",
    price: "CA$277",
    availability: "Pre-Order",
    imageUrl: "https://cdn.shopify.com/s/files/1/0974/7950/files/Monogram_Keyboard_3_45ca86e3-ee84-48a0-b55d-c991d2e57e3c_1920x1080_crop_center.jpg.webp?v=1712087520" 
  },
  {
    name: "Monogram Core",
    price: "CA$222",
    availability: "Pre-Order",
    imageUrl: "https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_CoreBracket1_Monogram_May2020_4578_6683fd8e-be63-45bb-9fbd-dd82a4838db8_1920x1280_crop_center.jpg.webp?v=1593651640" 
  },
  {
    name: "Slider Module",
    price: "CA$222",
    availability: "Pre-Order",
    imageUrl: "https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_SliderBracket1_Monogram_May2020_4565_f941e8d9-d194-47ee-a54a-79132f105e34_1920x1280_crop_center.jpg.webp?v=1593651879" 
  },
  {
    name: "Orbiter Module",
    price: "CA$222",
    availability: "Pre-Order",
    imageUrl: "https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_OrbiterHero_Monogram_May2020_4568_3d64e8b3-71ce-441a-9fcd-2b054c423310_1920x1280_crop_center.jpg.webp?v=1593651849"
  },
  {
    name: "Essential Keys Module",
    price: "CA$180",
    availability: "Pre-Order",
    imageUrl: "https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_KeysBracket1_Monogram_May2020_4571_43b65ca9-4fde-4f55-9f0e-32374554ce76_1920x1280_crop_center.jpg.webp?v=1593651769" 
  },
  {
    name: "Dial Module",
    price: "CA$180",
    availability: "Pre-Order",
    imageUrl: "https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_DialBracket1_Monogram_May2020_4575_981a6401-f834-4094-9a6e-6cd7d0b374ca_1920x1280_crop_center.jpg.webp?v=1593651701" 
  },
  {
    name: "Monogram Carrying Case",
    price: "CA$83",
    availability: "Pre-Order",
    imageUrl: "https://cdn.shopify.com/s/files/1/0974/7950/products/20221018_MonogramCC_Case_02_1920x1280_crop_center.jpg.webp?v=1666799808" 
  },
  {
    name: "Console Pack: Video",
    price: "CA$96",
    availability: "Pre-Order",
    imageUrl: "https://cdn.shopify.com/s/files/1/0974/7950/products/SW-box-render-mini-video-final-august_1920x1382_crop_center.jpg.webp?v=1661441054" 
  },
  {
    name: "Console Pack: Photo",
    price: "CA$55",
    availability: "Pre-Order",
    imageUrl: "https://cdn.shopify.com/s/files/1/0974/7950/products/SW-box-render-mini-photo-final-august_1920x1382_crop_center.jpg.webp?v=1661440997" 
  },
  {
    name: "Console Pack: Audio",
    price: "CA$41",
    availability: "Pre-Order",
    imageUrl: "https://cdn.shopify.com/s/files/1/0974/7950/products/SW-box-render-mini-midi-final-august_1920x1382_crop_center.jpg.webp?v=1661440892" 
  },
  {
    name: "Monogram Care",
    price: "CA$27 – CA$180",
    availability: "Pre-Order",
    imageUrl: "https://cdn.shopify.com/s/files/1/0974/7950/products/MONO_CONSOLE_CARE_STU_453eaa1a-02d9-4ba7-9d9a-8d05e2915f8f_1920x1270_crop_center.jpg.webp?v=1633485492"
  }
];

  return (

    <div>
      <div id='aa' className='mt-0'>
         <div className="homepage ">
              <header className="header d-flex ms-4  me-1  " style={{width:"96%",height:"60px"}}>
                <div className="logo text-white  fw-bold ms-4" >MONOGRAM</div>
                <nav className="nav">
                  <a href="#how-it-works" class="btn">How It Works</a>
                  <div class="dropdown">
            <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            WORKFLOW
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a class="dropdown-item text-dark" href="https://monogramcc.com/workflows/audio/">AUDIO CONSOLE</a></li>
              <li><a class="dropdown-item text-dark" href="https://monogramcc.com/workflows/photo/">PHOTO CONSOLE</a></li>
              <li><a class="dropdown-item text-dark" href="https://monogramcc.com/workflows/video/">VIDEO CONSOLE</a></li>
              <li><a class="dropdown-item text-dark" href="https://monogramcc.com/workflows/everyday-essentials/">MINI CONSOLE</a></li>

            </ul>
        </div>
                  <a href="#download" class="btn">Download</a>
                  <a href="#blog" class="btn">Blog</a>
                  <a href="#support" class="btn">Support</a>
                  <a href="#shop" class="btn">Shop</a>
                </nav>
              </header>
              <main className="main-content">
                <div className="intro">
                  <h1 className='text-dark fw-bold'>A Console for<br/> Every Workflow</h1>
                  <p className='text-dark'>Discover the perfect console for yours.</p>
                  
                </div>
              </main>
            </div>
       </div>  
       <div class="container mt-5 mb-5 ">
          <div class="container row mt-5 main">
              {arr.map((a,index)=>
              <div key={index} > 
              <div id='order' className='text-dark'>{a.order}</div>
              <img src={a.imgUrl}  width="100%" height="400px" className='m'></img>
              <div className="d-flex  " id="im">
                <h4>{a.title}</h4>
                <h6 class="">{a.price}</h6>
              </div>
              <p>{a.description}</p> 
                </div>  
                )}
         
          </div>
        </div>
        <div className='container'>
              <div className='container '>
              <img src='https://cdn.shopify.com/s/files/1/0974/7950/files/Monogram_Keyboard_2_878639a5-2865-4c4f-a21e-498f3a3db3b8_1920x1080_crop_center.jpg.webp?v=1712087494' width="100%" height="500px"></img>
            <div className='d-flex' id='im'>
              <h4>MONOGRAM KEYBOARD + MULTIPAD</h4>
              <h6>Ca$764</h6>
              </div>
              <p>Adaptable to any workflow.</p>
              </div>
        </div>
        <div id='fi'>
        <main className="">
                <div className="intro">
                  <h1 className='text-primary fw-bold'>CREATE YOUR OWN CONSOLE</h1>
                  <p className='text-primary'>Add-on to make it perfect.</p>
                  
                </div>
              </main>
        </div>
        <div className='container'>
            <div className="product-list container row mt-5 main1 mb-5">
          {products.map((product, index) => (
            <div key={index} className="product">
              <p id='order'> {product.availability}</p>
              <img src={product.imageUrl} alt={`${product.name} image`} className="product-image"  width="100%" height="350px"/>
              <div className="d-flex  " id="im">
                <h4>{product.name}</h4>
                <h6> {product.price}</h6>
              </div>
              
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Monogram