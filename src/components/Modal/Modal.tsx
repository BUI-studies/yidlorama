import { FC, ReactNode, useState, useEffect } from 'react';
import { Button } from '../index';
import { SVG } from '../../../public/SVG';
import classes from './Modal.module.css';

type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  content: ReactNode;
};

const Modal: FC<ModalProps> = ({ isOpen = true, onClose, content }) => {
  const [open, setOpen] = useState(isOpen);
  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  };
  return (
    <>
      {open &&
      (<div className={classes.container}>
        <div className={classes.modal}>
          <button className={classes.modalSVG} onClick={handleClose}>{SVG.closeIcon}</button>
          <div className={classes.modalContent}>
            {content}
          </div>
        </div>
      </div>)}
    </>
  )
}

export default Modal;