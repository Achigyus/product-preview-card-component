import './App.css'
import cartIcon from './assets/icon-cart.svg'
import mobileImage from './assets/image-product-mobile.jpg'
import desktopImage from './assets/image-product-desktop.jpg'

function App() {

  return (
    <div className="container">

      <div className="product_preview_card">

        <div className="product_preview_img_container">
          <img src={mobileImage} alt="Picture of Gabrielle Essence Eau De Parfum" className="product_preview_img_mobile" />
          <img src={desktopImage} alt="Picture of Gabrielle Essence Eau De Parfum" className="product_preview_img_desktop" />
        </div>
        
        <div className="product_preview_details">
          <p className="product_preview_type montserrat_500">Perfume</p>
          <h1 className="product_preview_name fraunces_700">Gabrielle Essence Eau De Parfum</h1>
          <p className="product_preview_desc montserrat_500">A floral, solar and voluptuous interpretation composed by Olivier Polge,
          Perfumer-Creator for the House of CHANEL.</p>
          <div className="product_preview_prices">
            <p className="product_preview_discount_price fraunces_700">$149.99</p>
            <p className="product_preview_old_price montserrat_500">$169.99</p>
          </div>
          <button className="product_preview_add_to_cart_btn montserrat_700">
            <div className="product_preview_cart_img_container">
              <img src={cartIcon} alt="cart icon" className="product_preview_cart_img" />
            </div>
            Add to Cart
          </button>
        </div>

      </div>

    </div>
  )
}

export default App
