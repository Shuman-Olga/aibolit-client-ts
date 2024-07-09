import React from "react";
import { NavLink } from "react-router-dom";

import { dataSpravki } from "../../data/dataSpravkiItem";

export function SpravkiItem() {
  return (
    <>
      {dataSpravki.map((item) => (
        <NavLink
          to={`/uslugi-i-ceny/medicinskie-spravki-rebenku/${item.path}/`}
          className="nav-link"
          target="_top"
          rel="noopener noreferrer"
          key={item.id}
        >
          <div className="w-75 mb-5 p-3">
            <div className="text-center mb-2">
              <h3>{item.title}</h3>
            </div>

            <div className="d-flex block-foto">
              <div>
                <img
                  src={require(`../../assets/img/${item.img}`)}
                  alt="foto"
                  title={item.title}
                  width="315"
                />
              </div>
              <div className="p-3">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        </NavLink>
      ))}
    </>
  );
}
