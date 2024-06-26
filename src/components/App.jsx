import { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getImages } from './Pixabay/Pixabay';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export default function App() {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (ev, inputValue) => {
    ev.preventDefault();
    setIsLoading(true);
    try {
      const axiosImages = await getImages(page, inputValue);
      setImages(axiosImages);
      setInputValue(inputValue);
    } catch {
      console.error('ERROR', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoudMore = ev => {
    ev.preventDefault();
    setIsLoading(true);
    setPage(page + 1);
  };

  useEffect(() => {
    const axiosImages = async () => {
      if (page > 1) {
        try {
          const newImages = await getImages(page, inputValue);
          setImages(prevImages => [...prevImages, ...newImages]);
        } catch {
          console.error('ERROR', error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    axiosImages();
  }, [page]);

  return (
    <>
      <div
        style={{
          height: '10vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework-04 Image
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Searchbar onSubmit={handleSubmit} />
      </div>
      <div>
        <ImageGallery images={images} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Button
          onClick={handleLoudMore}
          page={page}
          images={images}
          isLoading={isLoading}
        />
        <Loader isLoading={isLoading} />
      </div>
    </>
  );
}
