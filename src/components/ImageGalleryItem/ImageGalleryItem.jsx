import s from './ImageGalleryItem.module.scss';

export default function ImageGalleryItem({
  imgData,
  onClickModal,
  setModalImage,
}) {
  const { webformatURL, largeImageURL } = imgData;

  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt="thumb"
        className={s.ImageGalleryItemImage}
        onClick={() => {
          onClickModal();
          setModalImage(largeImageURL);
        }}
      />
    </li>
  );
}
