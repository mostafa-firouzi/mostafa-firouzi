// src/components/PhotoCard.tsx
import Image from "@/assets/images/image.png";

const PhotoCard = () => {
  return (
    <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
      <img
        src={Image}
        alt="Mostafa Firouzi - Fachinformatiker für Anwendungsentwicklung"
        className="w-full h-full object-cover object-top"
      />
    </div>
  );
};

export default PhotoCard;
