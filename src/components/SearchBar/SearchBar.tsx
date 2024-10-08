
import toast, { Toaster } from 'react-hot-toast';
import React, { FormEvent } from 'react';

import css from "./SearchBar.module.css"


type Props = {
  onSabmit: (value: string) => void;
};



export default function SearchBar({ onSabmit }:Props) {
  

  const handleSubmit = (event: React.FormEvent):void => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      elements: {
        text: {
          value: string,
        }
    }
    }
    const res = target.elements.text.value;
    if (res.trim()==='') {
      toast('Enter the correct value!');
      target.elements.text.value = '';
      return;
    }
    onSabmit(res);
    target.elements.text.value = '';
  };


  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name='text'
          //autocomplete="off"
          //autofocus
          placeholder="Search images and photos"
          //value={values}
          //onChange={handleChange}
          className={css.input}
        />
        <button type="submit" className={css.button}>Search</button>
      </form>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </header>
  )
}

