export default function Banner() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w">
            <h1 className="mb-5 text-5xl font-bold uppercase">Play Tradional Game</h1>
            <p className="mb-5">
              Experience new traditional gameplay.
            </p>
            <button className="btn btn-warning uppercase">Play now</button>
          </div>
        </div>
      </div>
    </>
  );
}
