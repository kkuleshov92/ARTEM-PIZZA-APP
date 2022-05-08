import React from 'react';

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

  return (
    modals.map(modal =>
      <Modal
        key={modal.config.type}
        modal={modal}
        Component={MODAL_COMPONENTS[modal.config.type]}
      />)
  )
}

export default Modals;