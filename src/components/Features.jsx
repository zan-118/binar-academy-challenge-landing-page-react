import bg from "../assets/features.jpg";

export default function Features() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div className="py-8 text-center">
          <h3 className="text-2xl">What's So Special?</h3>
          <h3 className="uppercase text-5xl">Features</h3>
        </div>
        <div className="w-3/4">
          <ul className="steps  ">
            <li className="step ">
              <h2 className="text-warning uppercase">Traditional Games</h2>
              <p className="text-start">
                if you miss your chilhood, we provide many traditional games
                here.
              </p>
            </li>
            <li className="step">
              <h2 className="text-warning uppercase">Game Suit</h2>
            </li>
            <li className="step ">
              <h2 className="text-warning uppercase">TBD</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
