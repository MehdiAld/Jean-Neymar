import React, { useState } from "react";
import { Link } from "react-router-dom";

const BooksPage = () => {
  const [isBookHovered, setIsBookHovered] = useState(false);

  return (
    <>
      <div className="container-books">
        <h1 className="title-books">Ma vie, mon oeuvre</h1>

        <div
          className="books"
          onMouseEnter={() => setIsBookHovered(true)}
          onMouseLeave={() => setIsBookHovered(false)}
        >
          <div className="one-book">
            <Link to="/books/0">
              <div className="top-book">
                <h4>Jean Neymar</h4>
                <h2>Après coup, jean rigole</h2>
                <img
                  src="../src/assets/sre.png"
                  alt="Book Cover"
                  className="book-image"
                />
              </div>
              <div className="mid-book">
                <h3>
                  Prix Devos <br />
                  2016
                </h3>
              </div>
            </Link>
            <div className="bottom-book">
              <h2>Après coup, jean rigole</h2>
            </div>
          </div>
          <div className="one-book">
            <Link to="/books/1">
              <div className="top-book">
                <h4>Jean Neymar</h4>
                <h2>Des vacances aux bahamas</h2>
                <img
                  src="../src/assets/sre.png"
                  alt="Book Cover"
                  className="book-image"
                />
              </div>
              <div className="mid-book">
                <h3>
                  Prix Pole Emploie <br />
                  2017
                </h3>
              </div>
            </Link>
            <div className="bottom-book">
              <h2>Des vacances aux bahamas</h2>
            </div>
          </div>
          <div className="one-book">
            <Link to="/books/2">
              <div className="top-book">
                <h4>Jean Neymar</h4>
                <h2>Il me reste encore un oeil</h2>
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
        {isBookHovered && (
          <div className="hovered-text">
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
              euismod magna. Duis condimentum purus et elit pretium, eget cursus
              nisi ultricies. Curabitur lectus elit, hendrerit quis dui et,
              placerat tincidunt quam. Aliquam non ligula dui. Sed sed facilisis
              augue. Nam hendrerit lacinia interdum. In ultricies vehicula nulla
              eu feugiat.
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default BooksPage;
