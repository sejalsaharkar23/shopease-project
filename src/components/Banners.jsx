import { useEffect, useState } from "react";
import banners from "../data/banners";

const Banners = () => {
  const [index, setIndex] = useState(0);

    useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex(index === 0 ? banners.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex((index + 1) % banners.length);
  };

  return (
    <div className="banner-container">
     
      <img
        src={banners[index].image}
        alt="banner"
        className="banner-image"
      />

     <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>
      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>

      <div className="dots">
        {banners.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banners;
