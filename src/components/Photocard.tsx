// src/components/PhotoCard.tsx
const PhotoCard = () => {
  return (
    <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
  <img src={import.meta.env.BASE_URL + 'image.png'} alt="Mein Bild" />


</div>

  );
}

export default PhotoCard;
