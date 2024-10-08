import React, { MouseEvent } from 'react';

import css from "./LoadMoreBtn.module.css"

type Props = {
  moreImages: () => void;
};


export default function LoadMoreBtn({moreImages}:Props) {

  const click = () => { 
    moreImages();
  };
  return (
    <button type="button" onClick={click} className={css.moreButton}>Load more</button>
  )
}
