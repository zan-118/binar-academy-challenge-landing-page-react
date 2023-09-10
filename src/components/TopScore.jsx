import bg from "../assets/top-score-bg.png"

export default function TopScore(){
    return (
        <>
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
      ></div>
        </>
    )
}