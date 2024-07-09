import React from "react";
import { IAdvantageBlok } from "../../types/IAdvantageBlok";

export function AdvantageItem({ title, img }: IAdvantageBlok) {
  return (
    <>
      <div className="col">
        <div className="card  h-100">
          <img
            src={require(`../../assets/img/${img}`)}
            className="card-img-top"
            alt="aibolit"
            title={title}
          />
          <div className="card-body">
            <p className="card-text">{title}​</p>
          </div>
        </div>
      </div>
    </>
  );
}
