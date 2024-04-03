import { NavLink } from "react-router-dom";
import { TypeDoctor } from "../../types/typeDoctorItem";
import { TypeLinkMenu } from "../../types/typeLinkMenu";

export function DoctorItem({
  firstname,
  lastname,
  surname,
  img,
  title,
  path,
}: TypeDoctor & TypeLinkMenu) {
  return (
    <NavLink
      to={path}
      className="nav-link"
      target="_top"
      rel="noopener noreferrer"
    >
      <div className="col">
        <div className="card  h-100">
          <img
            src={require(`../../assets/img/${img}`)}
            className="card-img-top"
            alt={firstname}
            title={title}
          />
          <div className="card-body">
            <p className="card-text">{lastname}</p>
            <p className="card-text">{firstname}</p>
            <p className="card-text">{surname}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
