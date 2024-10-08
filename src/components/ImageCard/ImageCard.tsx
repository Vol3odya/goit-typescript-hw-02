import css from "./ImageCard.module.css"

type Data = {
  id: string;
  urls: {
	small: string,
  };
  description: string;
};

type Props = {
  value: Data;
  modalId: (value: string) => void;
};

export default function ImageCard({value, modalId}:Props) {

	
  return (
		  <div>
		  	<img id={value.id} src={value.urls.small} alt={value.description} className={css.img} onClick={(e)=>modalId(value.id)} />
		  </div>
  )
}
