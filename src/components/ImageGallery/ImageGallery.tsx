import { FC } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export interface Image {
  id: string;
  smallImageUrl: string;
  largeImageUrl: string;
  alt: string;
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => {
  return (
    <ul>
      {images.map(image => (
        <li key={image.id} onClick={() => onImageClick(image)}>
          <img src={image.smallImageUrl} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
