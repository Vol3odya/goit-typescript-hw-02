import { useState, useEffect } from 'react'



import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import {fetchPhoto} from "../../http/http"
import css from "./App.module.css"
import ImageModal from '../ImageModal/ImageModal'

type Data = {
  id: string;
  urls: {
  full: string,
	small: string,
  };
  description: string;
}[];


export default function App() {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [photos, setPhotos] = useState<Data>([]);

  const [topic, setTopic] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(999);
  const [modal, setModal] = useState<string>("");


  useEffect(() => {
    if (topic === "") {
      return;
    }

    async function getPhoto() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetchPhoto(topic, page);
        setPhotos((prevState) => [...prevState, ...res.photo]);
        setTotalPages(res.totalPages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getPhoto();
  }, [page, topic]);

 

  function search(text:string):void {
    setPhotos([]);
    setTopic(text);
    setPage(1);
  };

  function more():void {
    setPage(page+1);
  };

  function modalOn(id:string):void {
    setModal(id);
  };
  
  function modalOff():void { 
    setModal('');
  };

  
  return (
    <div className={css.container}>
      <SearchBar onSabmit={search} />
      <ImageGallery photos={photos} modalId={modalOn} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {totalPages > page && photos.length > 0 && !loading && <LoadMoreBtn moreImages={more} />}
      {modal && <ImageModal isOpen={modal} value={photos[photos.findIndex(el => el.id === modal)]} modalOff={modalOff} />}
    </div>
  )
}
