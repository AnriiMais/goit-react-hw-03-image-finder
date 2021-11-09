import s from './ImageGalleryItem.module.scss';

export default function ImageGalleryItem() {
  return (
    <li className={s.ImageGalleryItem}>
      <img src="" alt="" className={s.ImageGalleryItemImage} />
    </li>
  );
}
