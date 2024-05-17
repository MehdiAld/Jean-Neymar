import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <div className="container-books">
          <h1 className="title-books">Prochainement en librairie!</h1>
          <div className="books">
            <div className="one-book">
              <Link to="/books/2">
                <div className="top-book">
                  <h4>Jean Neymar</h4>
                  <h2 className="text-in-black-normally-why">
                    Il me reste encore un oeil
                  </h2>
                  <img
                    src="../src/assets/sre.png"
                    alt="Book Cover"
                    className="book-image"
                  />
                </div>
                <div className="mid-book">
                  <h3>
                    Prix Castaner <br />
                    2019
                  </h3>
                </div>
              </Link>
              <div className="bottom-book">
                <h2>Il me reste encore un oeil</h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lorem-homepage">
            « Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            molestias dolorum expedita necessitatibus rem ullam vel consectetur
            sapiente porro. Magnam, aspernatur maiores debitis deleniti iure
            illo dolore libero consectetur consequuntur! »
          </h3>
        </div>
      </div>
    </>
  );
};

export default HomePage;
