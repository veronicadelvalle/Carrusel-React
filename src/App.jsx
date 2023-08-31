import {useState, useEffect, useRef} from 'react';
import Navigation from './slider/Navigation';
import Pagination from './slider/Pagination';

const App = () => {
  const [indexImage, setIndexImage] = useState(0);

  const imagePaths = [
    '../../image/img-pets-1.jpg', 
    '../../image/img-pets-2.jpg', 
    '../../image/img-pets-3.jpg', 
    '../../image/img-pets-4.jpg',
  ]

  const slideRef = useRef(null);
  
  useEffect(() => {
    const slider = slideRef.current;
    const percentage = -100 * indexImage;

    slider.style.transform = `translateX(${percentage}%)`;
  }, [indexImage]); 

  const handleNext = () => setIndexImage((prevIndex) => (prevIndex + 1) % imagePaths.length);
  const handlePrev = () => setIndexImage((prevIndex) => (prevIndex - 1 + imagePaths.length) % imagePaths.length);

  return (
    <div className="container">
      <div className="slider-container">
        <div className="slider-wrapper" ref={slideRef}>
          {imagePaths.map((path, index) => (
            <div className="slider" key={index}>
              <img src={path} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </div>

        <Navigation 
          onNext={handleNext} 
          onPrev={handlePrev} 
        />

        <Pagination 
          currentIndex={indexImage} 
          totalImages={imagePaths.length} 
          onPageChange={setIndexImage}
        />
      </div>
    </div>
  );
}

export default App;