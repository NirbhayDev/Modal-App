import ReusableButton from "./ReusableButton";
const Card = (props) => {
  return (
    <>
      <div className="card-body rounded-xl card1-bg mr-4 p-0 ">
        <div className="black-bg m-0 p-0 rounded-xl ">
          <h1 className="font1 pt-4 text-white text-center">{props.type}</h1>
          <p className="text-center text-white-50 font3">
            Lorem Ipsum Dollar sit Ammet
          </p>
          <div className="text-center">
            <img src={props.pic1} alt="" />
          </div>
          <h2 className="text-center text2 font5 py-4">{props.price}</h2>
        </div>
        <p className="mx-4 py-5 font3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          volutpat felis, ut tempor ligula. Aliquam vitae nulla finibus,
          accumsan ligula eu, dictum metus. Phasellus scelerisque, sem quis
          cursus bibendum, leo augue rhoncus quam, sit amet luctus urna nisi ac
          lectus. Integer ac velit
        </p>
        <div className="text-center mb-2">
          <ReusableButton />
        </div>
      </div>
    </>
  );
};
export default Card;
