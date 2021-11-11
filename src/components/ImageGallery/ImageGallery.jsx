import s from './ImageGallery.module.scss';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({
  data,
  handleToggleForImage,
  setModalImage,
}) {
  return (
    <ul className={s.ImageGallery}>
      {data.map(item => (
        <ImageGalleryItem
          imgData={item}
          key={item.id}
          onClickModal={handleToggleForImage}
          setModalImage={setModalImage}
        />
      ))}
    </ul>
  );
}
