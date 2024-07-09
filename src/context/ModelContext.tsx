import React, { createContext, ReactNode, useState } from "react";

interface IModalContext {
  modal: boolean;
  open: () => void;
  close: () => void;
}

export const ModalContext = createContext<IModalContext>({
  modal: false,
  open: () => {},
  close: () => {},
});

interface ModalProviderProps {
  children: ReactNode;
}
export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modal, setModal] = useState(false);

  const open = () => setModal(true);

  const close = () => setModal(false);

  return (
    <ModalContext.Provider value={{ modal, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};
