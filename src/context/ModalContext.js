import React, { createContext, useCallback, useContext, useState } from 'react';

const ModalContext = createContext({
  modals: [],
  closedModals: [],
  openModal: (config) => {
  },
  closeModal: (type) => {
  },
});

export const ModalProvider = (props) => {
  const [ modals, setModals ] = useState([]);
  const [ closedModals, setClosedModals ] = useState([]);

  const openModal = useCallback((config) => {
    const newModal = {config};

    setModals(prevState => {
      const dublicate = prevState.some(item => item.config.type === newModal.config.type)

      return dublicate
        ? [...prevState]
        : [ ...prevState, newModal ]
    });
  }, [modals])

  const closeModal = useCallback((type) => {
    setClosedModals(prevState => [ ...prevState, type ]);

    setTimeout(() => {
      setModals(prevState => prevState.filter(modal => modal.config.type !== type));
      setClosedModals(prevState => prevState.filter(modalType => modalType !== type));
    }, 300)
  }, [])

  return (
    <ModalContext.Provider
      value={{
        modals,
        openModal,
        closedModals,
        closeModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => useContext(ModalContext);