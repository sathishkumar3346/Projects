import React, { useState } from 'react'
import './Abstract.css'

const Abstract = () => {
  let arr= [
    {
      title: "Using Abstract",
      description: "Abstract lets you manage, version, and document your designs in one place.",
      linkText: "Learn More →",
      TextUrl:"https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract",
      linkUrl: "https://help.abstract.com/hc/theming_assets/01HZH4D4GACXWCRKK6JHQ730XD"
    },
    {
      title: "Manage your account",
      description: "Configure your account settings, such as your email, profile details, and password.",
      linkText: "Learn More →",
      TextUrl:"https://help.abstract.com/hc/en-us/categories/360005449431-Manage-your-account",
      linkUrl: "https://help.abstract.com/hc/theming_assets/01HZH4D45NKFCN3388ZCBJB878"
    },
    {
      title: "Manage organizations, teams, and projects",
      description: "Use Abstract organizations, teams, and projects to organize your people and your work.",
      linkText: "Learn More →",
      TextUrl:"https://help.abstract.com/hc/en-us/categories/360005449531-Manage-organizations-teams-and-projects",
      linkUrl: "https://help.abstract.com/hc/theming_assets/01HZH4D3M8CRR0C2V5GREVR6HK"
    },
    {
      title: "Manage billing",
      description: "Change subscriptions and payment details.",
      linkText: "Learn More →",
      TextUrl:"https://help.abstract.com/hc/en-us/categories/360005436672-Manage-billing",
      linkUrl: "https://help.abstract.com/hc/theming_assets/01HZH4D38K1S1M9WKWSQZE62YE"
    },
    {
      title: "Authenticate to Abstract",
      description: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
      linkText: "Learn More →",
      TextUrl:"https://help.abstract.com/hc/en-us/categories/360005436592-Authenticate-to-Abstract",
      linkUrl: "https://help.abstract.com/hc/theming_assets/01HZH4D3S3QY5190TZE3H8ZSVK"
    },
    {
      title: "Abstract support",
      description: "Get in touch with a human.",
      linkText: "Learn More →",
      TextUrl:"https://help.abstract.com/hc/en-us/articles/360050382291-Contact-Support",
      linkUrl: "https://help.abstract.com/hc/theming_assets/01HZH4D3G4S2K93BN3WJPT8600"
    }

  ];
   let section= [
    {
      title: "Abstract",
      links: [
        { text: "Start Trial", url: "#" },
        { text: "Pricing", url: "#" },
        { text: "Download", url: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", url: "#" },
        { text: "Help Center", url: "#" },
        { text: "Release Notes", url: "#" },
        { text: "Status", url: "#" }
      ]
    },
    {
      title: "Community",
      links: [
        { text: "Twitter", url: "#" },
        { text: "LinkedIn", url: "#" },
        { text: "Facebook", url: "#" },
        { text: "Dribbble", url: "#" },
        { text: "Podcast", url: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { text: "About Us", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Legal", url: "#" }
      ],
      contact: {
        title: "Contact Us",
        links: [
          { text: "info@abstract.com", url: "mailto:info@abstract.com" }
        ]
      }
    }
  ]
 
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid ms-2">
        <a className="navbar-brand d-flex ms-4" href="https://www.goabstract.com/">
          <img src="https://cdn.sanity.io/images/agx8u29z/production/6cf6a6d5858d7aba319b928c243409aa89e528ab-1500x500.png?rect=578,0,344,500&w=518&h=752&auto=format" alt="Logo" width="30" height="30" className="d-inline-block align-text-top ms-2" />
          <h4 className='ms-3'>Abstract</h4>
        </a>
        <h2 class="text-white , d-inline-block align-text-top" >|</h2>
        <a className="nav-link, text-white text-decoration-none  d-inline-block align-text-top ms-3" href="https://help.abstract.com/hc/en-us" width="30" height="30" ><h4>Help Center</h4></a>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item me-2">
              <a className="nav-link btn border border-light  btn-lg fw-bold" href="https://help.abstract.com/hc/en-us/articles/360050382291-Contact-Support">Submit a request</a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link btn btn-secondary btn-lg  bg-primary fw-bold" id='sin' href="https://help.abstract.com/hc/en-us/signin?return_to=https%3A%2F%2Fhelp.abstract.com%2Fhc%2Fen-us&locale=en-us">Sign in</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div id='midle'>
      <form id='text'>
        <label className='fw-bolder ' style={{fontSize:"70px"}}>How can we help?</label><br/>
        <input  className='rounded-3 fs-6 ' style={{width:"50%",height:"70px"}} placeholder='Search'/>
      </form>
    </div>
    <div class="container mt-5 mb-5">
        <div class="container row mt-5">
          {arr.map((a,b)=>
                <div key={b} className='col-6 d-flex mt-5'>
                  <img src={a.linkUrl} alt="User provided" width="15%" height="70px" className='me-4'/>
                  <div id="under"style={{width:"75%"}}>
                   <h1>{a.title}</h1>
                   <p>{a.description}</p> 
                   <a href={a.Textlink} className='text-decoration-none' id="link-a">{a.linkText}</a>   
                   </div>            
                </div>
          )} 
        </div>
    </div>
    <footer className="footer bg-dark text-white mt-5 p-4">
      <div className="container">
        <div className="row">
          {section.map((section, index) => 
            <div className="col-md-3" key={index}>
              <h5>{section.title}</h5>
              <ul className="list-unstyled">
                {section.links.map((link, linkIndex) => 
                  <li key={linkIndex}>
                    <a href={link.url} className="text-white text-decoration-none">
                      {link.text}
                    </a>
                  </li>
                )}
              </ul>  
              </div> 
              )}
              </div>
        </div> 
          
    </footer>
 
    </div>
  )
}

export default Abstract