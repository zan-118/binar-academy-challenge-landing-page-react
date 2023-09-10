import mainbg from "../assets/main-bg.jpg";

export default function Banner() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${mainbg})`, 
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w">
          <h1 className="mb-5 text-5xl font-bold uppercase">
            Play Traditional Game
          </h1>
          <p className="mb-5">Experience new traditional gameplay.</p>
          <button className="btn btn-warning uppercase">Play now</button>
        </div>
      </div>
    </div>
  );
}
