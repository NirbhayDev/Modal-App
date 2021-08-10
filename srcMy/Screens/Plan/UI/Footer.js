import { NavLink } from "react-router-dom";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <footer class="text-white fixed-bottom footerbg font3">
        <div class="container p-4">
        <div className="row">
        <div className="col-md-10">
          <div class="text-white-50">
            © {date} ModalWorld:
            <NavLink class="text-white-50" to="/">
              All Rights Reserved
            </NavLink>
          </div>
          </div>
          <div className="col-md-2">
          <div className="d-flex align-items-end">
            <span className="text-white-50 ">terms & condition </span>
          </div>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
