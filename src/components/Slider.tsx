import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import styled from 'styled-components';
import potro from '../assets/images/potro.jpg';
import puente from '../assets/images/puente.jpg';
import maradona from '../assets/images/maradona.jpg';
import rosa from '../assets/images/rosa.jpg';
import esquina from '../assets/images/esquina.jpg';

// Array de imágenes
const images = [
  { src: potro.src, desc: 'Mural del Potro en "El Gigante"' },
  { src: maradona.src, desc: 'Mural del Diego en "El Gigante"' },
  { src: puente.src, desc: 'Puente' },
  { src: rosa.src, desc: 'Casa doña Rosa' },
  { src: esquina.src, desc: 'En alguna esquina del barrio más popular' },
];

// Estilos
const SliderWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
`;

const Slide = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
`;

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Sombra para un efecto elevado */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Description = styled.p`
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #000;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  padding: 0.2rem;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 68.31%; /* Mantiene la proporción 732x500 */
  position: relative;
`;

const ResponsiveImage = styled.img`
  object-fit: contain; /* Asegura que la imagen no se recorte */
  max-width: 100%;
  max-height: 70vh; /* Asegura que la imagen no exceda la altura del viewport */
  border-radius: 8px; /* Bordes redondeados para un aspecto más suave */
`;

// Componente Modal
const Modal: React.FC<{ isOpen: boolean; onClose: () => void; imageSrc: string | null; imageDesc: string | null }> = React.memo(({ isOpen, onClose, imageSrc, imageDesc }) => (
  <ModalOverlay isOpen={isOpen} onClick={onClose}>
    <ModalContent onClick={(e) => e.stopPropagation()}>
      <CloseButton onClick={onClose}>×</CloseButton>
      {imageSrc && (
        <>
          <ResponsiveImage src={imageSrc} alt='Imagen ampliada' />
          <Description>{imageDesc}</Description>
        </>
      )}
    </ModalContent>
  </ModalOverlay>
));

// Componente Principal
export const Slider: React.FC = () => {
  const [modalData, setModalData] = React.useState<{ src: string; desc: string } | null>(null);

  const handleImageClick = (imageSrc: string, imageDesc: string) => {
    setModalData({ src: imageSrc, desc: imageDesc });
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <SliderWrapper>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 2, navigation: false },
          768: { slidesPerView: 3, navigation: true },
          1024: { slidesPerView: 4 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Slide onClick={() => handleImageClick(image.src, image.desc)}>
              <ImageWrapper>
                <ResponsiveImage src={image.src} alt={`Imagen ${index + 1}`} />
              </ImageWrapper>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal
        isOpen={modalData !== null}
        onClose={closeModal}
        imageSrc={modalData?.src || null}
        imageDesc={modalData?.desc || null}
      />
    </SliderWrapper>
  );
};
