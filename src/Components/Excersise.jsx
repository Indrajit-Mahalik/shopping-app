import React from 'react';

function Header({ cart }) {
  // Calculate the total quantity and price based on the cart data
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2);

  return (
    <>
      <div className="hero_area">
        {/* <!-- header section starts --> */}
        <header className="header_section">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <span>Giftos</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="shop.html">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="why.html">
                    Why Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="testimonial.html">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="user_option">
                <a href="">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>Login</span>
                </a>
                <a href="">
                  <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                  <span className="cart-info">
                    {/* Display the cart quantity and total price */}
                    <span>{totalQuantity}</span> items - ${totalPrice}
                  </span>
                </a>
                <form className="form-inline ">
                  <button className="btn nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </header>
        {/* <!-- end header section --> */}
        {/* <!-- slider section --> */}
        <section className="slider_section">
          <div className="slider_container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="detail-box">
                          <h1>Welcome To Our Gift Shop</h1>
                          <p>
                            Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non
                            necessitatibus error distinctio mollitia suscipit. Nostrum fugit
                            doloribus consequatur distinctio esse, possimus maiores aliquid
                            repellat beatae cum, perspiciatis enim, accusantium perferendis.
                          </p>
                          <a href="">Contact Us</a>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="img-box">
                          <img src="src/assets/images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="detail-box">
                          <h1>Welcome To Our Gift Shop</h1>
                          <p>
                            Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non
                            necessitatibus error distinctio mollitia suscipit. Nostrum fugit
                            doloribus consequatur distinctio esse, possimus maiores aliquid
                            repellat beatae cum, perspiciatis enim, accusantium perferendis.
                          </p>
                          <a href="">Contact Us</a>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="img-box">
                          <img src="src/assets/images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="detail-box">
                          <h1>Welcome To Our Gift Shop</h1>
                          <p>
                            Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non
                            necessitatibus error distinctio mollitia suscipit. Nostrum fugit
                            doloribus consequatur distinctio esse, possimus maiores aliquid
                            repellat beatae cum, perspiciatis enim, accusantium perferendis.
                          </p>
                          <a href="">Contact Us</a>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="img-box">
                          <img src="src/assets/images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel_btn-box">
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <i className="fa fa-arrow-left" aria-hidden="true"></i>
                  <span className="sr-only">Previous</span>
                </a>
                <img src="images/line.png" alt="" />
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end slider section --> */}
      </div>
    </>
  );
}

export default Header;
