export interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: {
    id: string;
    largeImageUrl: string;
    alt: string;
  };
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, image }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onRequestClose}>
      <div className="modal">
        <img src={image.largeImageUrl} alt={image.alt} />
      </div>
    </div>
  );
};

export default ImageModal;
