import React from 'react';
import { createPortal } from 'react-dom';

import { useModalContext } from "../../context/ModalContext";
import { Loadable } from "./Loadable";
import Modal from "./components/Modal";

const MODAL_COMPONENTS = {
  'preview': Loadable.Preview,
}

const Modals = () => {

  const {
    modals
  } = useModalContext();

  const modalRoot = document.querySelector('#modal-root');

  return (
    createPortal(modals.map(modal =>
      <Modal
        key={modal.config.type}
        modal={modal}
        Component={MODAL_COMPONENTS[modal.config.type]}
      />), modalRoot)
  )
}

export default Modals;