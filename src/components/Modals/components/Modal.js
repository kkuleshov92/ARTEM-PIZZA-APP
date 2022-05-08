import React, { useCallback, useEffect, useRef, Suspense } from 'react';
import { useModalContext } from "../../../context/ModalContext";


const Modal = (props) => {
  const {
    modal,
    Component,
  } = props;

  const {
    closeModal,
    closedModals,
  } = useModalContext();

  const modalWrapRef = useRef(null);

  useEffect(() => { // close on click or keydown
    if (!modal.config.doNotCloseOnOutsideClick) {
      let isClosing = false;

      const onClick = (e) => {
        const isClickOnOutside = e.target === modalWrapRef.current;

        if (isClickOnOutside && !isClosing) {
          isClosing = true;
          closeModal(modal.config.type);
        }
      }

      const onKeyDown = (e) => {
        if (e.key === 'Escape' && !isClosing) {
          isClosing = true;
          closeModal(modal.config.type);
        }
      }

      document.addEventListener('mousedown', onClick);
      document.addEventListener('keydown', onKeyDown);

      return () => {
        document.removeEventListener('mousedown', onClick);
        document.removeEventListener('keydown', onKeyDown);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onClose = useCallback(() => {
    closeModal(modal.config.type);
  }, [closeModal, modal]);

  return (
    <div
      ref={modalWrapRef}
      className="modal__wrap"
      data-is-closed={closedModals.includes(modal.config.type)}
    >
      <Suspense
        fallback={''}
      >
        <Component
          {...modal.config.props}
          closeModal={onClose}
        />
      </Suspense>
    </div>
  )
}

export default Modal;