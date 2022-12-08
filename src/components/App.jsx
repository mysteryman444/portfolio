import { NavLink } from "react-router-dom";

import './App.css';
import './bootstrap.css';
import "./fonts/Montserrat-VariableFont_wght.ttf"


function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        {/* <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">Jonathan Goshu</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse me-auto" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">WORK </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">ABOUT</a>
              </li>
            </ul>
          </div>
        </nav> */}

        <div class="col-lg-11 col-md-12 col-sm-12 col-xs-12 ">
          <div id="main-row" class="mainGrid">
            <img class="img-fluid coverImage" src={process.env.PUBLIC_URL + '/images/test.png'}></img>
            <div class="mainText text">
              <h1>👋🏾 Hi, I'm Jonathan</h1>
              <h4>a Computer Science Student at Brown University</h4>
            </div>
          </div>
        </div>

        <div id="cards">
          <h3 class="text projHeader">My Work</h3>
          <div class="contentGrid">

            <NavLink to="/ladd_observatory" style={{ textDecoration: 'none' }}>
              <div class="card card1">
                <div class="cardGrid">
                  <img class="card-img-top" src={process.env.PUBLIC_URL + '/images/telescope.png'}></img>
                  <div class="cardDescription">
                    <h5 class="text">Ladd Observatory Redesign</h5>
                    <h6 class="card-subtitle mb-2 text-muted text">October 2022</h6>
                    <p class="card-text text">Redesigned website for the Brown University Ladd Observatory</p>
                  </div>
                </div>
              </div>
            </NavLink>

            <NavLink to="/surviving_the_hot_100" style={{ textDecoration: 'none' }}>
              <div class="card card2">
                <div class="cardGrid">
                  <img class="card-img-top" src={process.env.PUBLIC_URL + '/images/music.png'}></img>
                  <div class="cardDescription">
                    <h5 class="text">Surviving the Hot 100</h5>
                    <h6 class="card-subtitle mb-2 text-muted text">May 2022</h6>
                    <p class="card-text text">Analysis of Spotify song attributes in relation to the Billboard Hot 100 list.</p>
                  </div>
                </div>
              </div>
            </NavLink>

            <NavLink to="/bakery_simulator" style={{ textDecoration: 'none' }}>
              <div class="card card3">
                <div class="cardGrid">
                  <img class="card-img-top" src={process.env.PUBLIC_URL + '/images/cupcake.png'}></img>
                  <div class="cardDescription">
                    <h5 class="text">Bakery Simulator</h5>
                    <h6 class="card-subtitle mb-2 text-muted text">October 2022</h6>
                    <p class="card-text text">Online ordering simulator for browsing bakery items</p>
                  </div>
                </div>
              </div>
            </NavLink>

            <NavLink to="/apply_design" style={{ textDecoration: 'none' }}>
              <span>
                <div class="card card4" to="/ladd_observatory">
                  <div class="cardGrid">
                    <img class="card-img-top" src={process.env.PUBLIC_URL + '/images/shoppingCart.png'}></img>
                    <div class="cardDescription">
                      <h5 class="text">Self-Checkout Machines</h5>
                      <h6 class="card-subtitle mb-2 text-muted text">September 2022</h6>
                      <p class="card-text text">A ui/ux case study on Wholefoods self-checkout machines</p>
                    </div>
                  </div>
                </div>
              </span>
            </NavLink>

          </div>
        </div>

        {/* <footer class=" text">
          <div class="container p-4 pl-0">
            <div class="row footer">
              <div class="col-lg-6 col-md-12 mb-4 mb-md-0 text-lg-start">
                <h4>Thank you for visiting!</h4>
                <p>made with ❤️ in Providence </p>
              </div>
              <div class="col-lg-6 col-md-12 mb-4 mb-md-0 text-lg-end">
                <h4></h4>
                <a href="mailto:johndoe@gmail.com" id="mailbutton" class="btn btn-outline-primary">Contact Me!</a>

              </div>
            </div>

          </div>

        </footer> */}

      </div>
    </div>
  );
}

export default App;
