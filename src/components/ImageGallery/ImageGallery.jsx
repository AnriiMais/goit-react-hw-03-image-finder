import s from './ImageGallery.module.scss';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ data }) {
  return (
    <ul className={s.ImageGallery}>
      {/* <!-- Набор <li> с изображениями --> */}
      <ImageGalleryItem />
    </ul>
  );
}
