import { NavLink } from "react-router-dom";

const Credits = () => {
  return (
    <>
      <div className="card rounded-xl brown-bg py-3 px-3 px-lg-5 flex-lg-row justify-content-lg-between align-items-lg-center">
        <div className="mb-3 mb-lg-0">
          <h4 className="text-white">Verified Credits (123)</h4>
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <br className="d-none d-xl-block" />
            Maecenas molestie eget tortor
          </p>
        </div>
        <p className="d-inline-block ms-lg-4 mb-0">
          <NavLink
            to="/"
            className="btn btn-outline rounded-pill px-5 py-2 peach-border text-peach"
          >
            <b>+Add Credits</b>
          </NavLink>
        </p>
      </div>
    </>
  );
};
export default Credits;
