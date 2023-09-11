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
      <div className="lg:ms-80">
        <div className="py-8 ">
          <h3 className="text-2xl">What's So Special?</h3>
          <h3 className="uppercase text-5xl">Features</h3>
        </div>
        <div className="w-3/4">
          <ul className="steps steps-vertical ">
            <li className="step w-96 ">
              <h2 className="text-warning uppercase mx-6">Traditional Games</h2>
              <span className="w-80 mx-10  text-justify">
                if you miss your chilhood, we provide many traditional games
                here.
              </span>
            </li>
            <li className="step w-96">
              <h2 className="text-warning uppercase mx-6">Game Suit</h2>
            </li>
            <li className="step w-96">
              <h2 className="text-warning uppercase mx-6">TBD</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
