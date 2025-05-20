import { FC } from 'react';
import css from './ImageCard.module.css';

export interface ImageCardProps {
  imageUrl: string;
  alt: string;
  onClick: (largeImageUrl: string) => void;
  largeImageUrl: string;
}

const ImageCard: FC<ImageCardProps> = ({ imageUrl, alt, onClick, largeImageUrl }) => {
  return (
    <div className={css.card} onClick={() => onClick(largeImageUrl)}>
      <img src={imageUrl} alt={alt} className={css.image} />
    </div>
  );
};

export default ImageCard;


