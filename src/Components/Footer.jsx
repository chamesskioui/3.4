import React from 'react'

function Footer() {
  return (
    <div>
    <>
  <div className="w3-container w3-black w3-padding-32">
    <h1>Subscribe</h1>
    <p>To get special offers and VIP treatment:</p>
    <p>
      <input
        className="w3-input w3-border"
        type="text"
        placeholder="Enter e-mail"
        style={{ width: "100%" }}
      />
    </p>
    <button type="button" className="w3-button w3-red w3-margin-bottom">
      Subscribe
    </button>
  </div>
  <footer
    className="w3-padding-64 w3-light-grey w3-small w3-center"
    id="footer"
  >
    <div className="w3-row-padding">
      <div className="w3-col s4">
        <h4>Contact</h4>
        <p>Questions? Go ahead.</p>
        <form action="/action_page.php" target="_blank">
          <p>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Name"
              name="Name"
              required=""
            />
          </p>
          <p>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Email"
              name="Email"
              required=""
            />
          </p>
          <p>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Subject"
              name="Subject"
              required=""
            />
          </p>
          <p>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Message"
              name="Message"
              required=""
            />
          </p>
          <button type="submit" className="w3-button w3-block w3-black">
            Send
          </button>
        </form>
      </div>
      <div className="w3-col s4">
        <h4>About</h4>
        <p >
          <a style={{textDecoration:"none"}} href="#">About us</a>
        </p>
        <p>
          <a style={{textDecoration:"none"}} href="#">We're hiring</a>
        </p>
        <p>
          <a style={{textDecoration:"none"}} href="#">Support</a>
        </p>
        <p>
          <a style={{textDecoration:"none"}} href="#">Find store</a>
        </p>
        <p>
          <a style={{textDecoration:"none"}} href="#">Shipment</a>
        </p>
        <p>
          <a style={{textDecoration:"none"}} href="#">Payment</a>
        </p>
        <p>
          <a style={{textDecoration:"none"}} href="#">Gift card</a>
        </p>
        <p>
          <a style={{textDecoration:"none"}} href="#">Return</a>
        </p>
        <p>
          <a style={{textDecoration:"none"}} href="#">Help</a>
        </p>
      </div>
      <div className="w3-col s4 w3-justify">
        <h4>Store</h4>
        <p>
          <i className="fa fa-fw fa-map-marker" /> Company Name
        </p>
        <p>
          <i className="fa fa-fw fa-phone" /> 0044123123
        </p>
        <p>
          <i className="fa fa-fw fa-envelope" /> ex@mail.com
        </p>
        <h4>We accept</h4>
        <p>
          <i className="fa fa-fw fa-cc-amex" /> Amex
        </p>
        <p>
          <i className="fa fa-fw fa-credit-card" /> Credit Card
        </p>
        <br />
        <i className="fa fa-facebook-official w3-hover-opacity w3-large" />
        <i className="fa fa-instagram w3-hover-opacity w3-large" />
        <i className="fa fa-snapchat w3-hover-opacity w3-large" />
        <i className="fa fa-pinterest-p w3-hover-opacity w3-large" />
        <i className="fa fa-twitter w3-hover-opacity w3-large" />
        <i className="fa fa-linkedin w3-hover-opacity w3-large" />
      </div>
    </div>
  </footer>
</>


    </div>
  )
}

export default Footer