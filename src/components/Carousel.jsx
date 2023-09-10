import bg from "../assets/the-games-bg.jpg"
import slideimg from "../assets/rockpaperstrategy-1600.jpg";

export default function Carousel() {
  return (
    <div style={{
        backgroundImage: `url(${bg})`, 
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "100vh",
      }}>
      <div className="container flex flex-wrap  py-8">
        <aside className="self-center lg:basis-1/4 text-2xl">
          <h3>What's so Special?</h3>
          <h3 className="uppercase text-5xl">The Game</h3>
        </aside>
        <div className="carousel sm:w-3/4 lg:basis-3/4, ">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={slideimg} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={slideimg} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={slideimg} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={slideimg} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
