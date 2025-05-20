import '../../../src/modal-config';
import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery, {
  type Image as GalleryImage,
} from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import {
  fetchImages,
  type Image as APIImage,
} from '../../api/unsplash-api';

function App() {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await fetchImages(query, page);

        const mappedImages: GalleryImage[] = data.results.map((img: APIImage) => ({
          id: img.id,
          smallImageUrl: img.urls.small,
          largeImageUrl: img.urls.regular,
          alt: img.alt_description || 'Image',
        }));

        setImages(prev => [...prev, ...mappedImages]);
        setTotalPages(data.total_pages);
      } catch (err) {
        setError('Failed to fetch images');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => setPage(prev => prev + 1);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {isLoading && <Loader />}
      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          key={selectedImage.id}
          isOpen={true}
          onRequestClose={() => setSelectedImage(null)}
          image={selectedImage}
        />
      )}
    </div>
  );
}

export default App;

