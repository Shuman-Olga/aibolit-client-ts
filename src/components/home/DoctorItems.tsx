import React from "react";
import { NavLink } from "react-router-dom";

import { TypeDoctor } from "../../types/typeDoctorItem";

export function DoctorItem({
  firstname,
  lastname,
  surname,
  img,
  path,
}: TypeDoctor) {
  return (
    <NavLink
      to={`/doctors/${path}/`}
      className="nav-link"
      target="_top"
      rel="noopener noreferrer"
    >
      <div className="col">
        <div className="card  h-100">
          <img
            src={require(`../../assets/img/${img}`)}
            className="card-img-top"
            alt={lastname}
            title={lastname}
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
