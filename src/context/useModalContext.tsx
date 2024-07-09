import { useContext } from "react";
import { ModalContext } from "./ModelContext";

export const useModalContext = () => {
  return useContext(ModalContext);
};
