import ReactModal from 'react-modal';
import css from "./ImageModal.module.css"

type Data = {
  isOpen: string,
  value: {
    id: string;
    urls: {
	    full: string,
    }
    description: string;
  },
  modalOff: () => void;
  
};

export default function ImageModal({ isOpen, value, modalOff }: Data) {
  
  function bool(open:string):boolean {
    if (open === "") {
      return false;
    }
    else {
      return true;
    }
  }

  return (
    <ReactModal isOpen={bool(isOpen)} onRequestClose={modalOff}>
      <img src={value.urls.full} alt={value.description} className={css.img} />
    </ReactModal>
  )
}
