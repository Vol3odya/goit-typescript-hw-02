import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

type Data = {
  id: string;
  urls: {
	small: string,
  };
  description: string;
}[];

type Props = {
  photos: Data;
  modalId: (value: string) => void;
};



export default function ImageGallery({ photos, modalId }:Props) {


  return (
    <ul className={css.spis}>
      {photos.map((value) => {
        return (
          <li key={value.id} className={css.cart}>
            <ImageCard value={value} modalId={modalId}/>  
          </li>);
      })}
	    
    </ul>
  )
}
