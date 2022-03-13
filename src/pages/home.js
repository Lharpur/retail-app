import React from 'react'

const Home = () => {
  return (
    <div className="landingContainer">
      <div className="banner">
        <h4>Free Express Shipping on all orders</h4>
      </div>
      <div className="landing">
        <div className="landingImage">
          <img src="./images/landingimage.jpg" alt="" />
        </div>
        <div className="landingContent">
          <h3>Welcome To Heliacal Records</h3>
          <p>
            We are a local record and merchandise distributor for all of your
            favourite artists. We pride ourselves on our broad range of
            selection and efficient customer service. With new orders arriving
            daily, you're bound to find something new to enjoy.
          </p>
          <a href="/product">Start Digging</a>
        </div>
      </div>
    </div>
  )
}

export default Home
