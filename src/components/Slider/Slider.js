import React, { useEffect, useRef } from 'react';
import './Slider.css';

const Slider = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 100; // Adjust the scrolling distance as needed
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 100; // Adjust the scrolling distance as needed
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; // Adjust the speed of scrolling here
      slider.scrollLeft = scrollLeft - walk;
    });
  }, []);
  return (
    <>
    <h1 className='text-center pt-3'> Featured products </h1>
    <div className="slider-container">
      <div className="slider" ref={sliderRef}>
        {/* Card 1 */}
        <button className="card-button left" onClick={scrollLeft}>&lt;</button>
        <div className="card ">
          <img src="https://i.pinimg.com/236x/0b/bf/10/0bbf1021f4ae1b333e3ef265a676c0f4.jpg" alt="Card 1" />
          <div className="card-content ">
            <h3 className="card-title">Skirt</h3>
            <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac fermentum cursus.</p>
            <button className="btn btn-primary"><i className="fas fa-shopping-cart">Add to Cart</i></button>
          </div>
          
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src="https://i.pinimg.com/474x/c1/5c/71/c15c715d15988006f32405fb389f201f.jpg" alt="Card 2" />
          <div className="card-content ">
            <h3 className="card-title">Hoddie</h3>
            <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac fermentum cursus.</p>
            <button className="btn btn-primary"><i className="fas fa-shopping-cart">Add to Cart</i></button>
          </div>
          
        </div>

        {/* Card 3 */}
        <div className="card">
          
          <img src="https://images-eu.ssl-images-amazon.com/images/I/61IIKfT7AZL._AC_SR462,693_.jpg" alt="Card 3" />
          <div className="card-content ">
            <h3 className="card-title">Cargo</h3>
            <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac fermentum cursus.</p>
            <button className="btn btn-primary"><i className="fas fa-shopping-cart">Add to Cart</i></button>
          </div>
          
        </div>

        {/* Card 4 */}
        <div className="card">
          
          <img src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D" alt="Card 4" />
          <div className="card-content ">
            <h3 className="card-title">T-shirt</h3>
            <p className="card-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac fermentum cursus.</p>
            <button className="btn btn-primary"><i className="fas fa-shopping-cart">Add to Cart</i></button>
          </div>
          
        </div>

        {/* Card 5 */}
        <div className="card">
          
          <img src="https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D" alt="Card 5" />
          <div className="card-content">
            <h3 className="card-title">T-shirt</h3>
            <p className="card-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac fermentum cursus.</p>
            <button className="btn btn-primary"><i className="fas fa-shopping-cart">Add to Cart</i></button>
          </div>
         
        </div>

        {/* Card 6 */}
        <div className="card">
          <img src="https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D" alt="Card 6" />
          <div className="card-content">
            <h3 className="card-title">T-shirt</h3>
            <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac fermentum cursus.</p>
            <button className="btn btn-primary"><i className="fas fa-shopping-cart">Add to Cart</i></button>
          </div>
          
        </div>

        {/* Card 7 */}
        <div className="card">
          <img src="https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww" alt="Card 7" />
          <div className="card-content">
            <h3 className="card-title">T-shirt</h3>
            <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac fermentum cursus.</p>
            <button className="btn btn-primary"><i className="fas fa-shopping-cart">Add to Cart</i></button>
          </div>
        </div>
          <button className="card-button right" onClick={scrollRight}>&gt;</button>

      </div>
    </div>
    </>
  );
};

export default Slider;


