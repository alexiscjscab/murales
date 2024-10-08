import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';
import potro from '../assets/images/potro.jpg'; // Agrega más importaciones de imágenes según sea necesario

// Estilos para el contenedor de Swiper
const SliderWrapper = styled.div`
  width: 100%;
  padding: 1rem; // Reducción del padding para móviles
  position: relative;
  border: 2px solid #000;
`;

// Estilos para cada slide
const Slide = styled.div`
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    transform: scale(1.1);
  }
`;

// Estilos para el modal
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
  max-width: 90%; // Aumentar el ancho del modal en dispositivos móviles
  max-height: 90%; // Aumentar la altura del modal en dispositivos móviles
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageInModal = styled(Image)`
  max-width: 100%;
  max-height: 70vh; /* Evita que la imagen sobrepase la altura del modal */
  object-fit: contain; /* Asegura que la imagen se ajuste bien dentro del modal */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #000;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Description = styled.p`
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #333;
  text-align: center;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Array de imágenes
const images = [
  { src: potro, desc: 'Descripción de otra imagen' },
  { src: potro, desc: 'Descripción de la tercera imagen' },
  { src: potro, desc: 'Descripción de otra imagen' },
  { src: potro, desc: 'Descripción de la tercera imagen' },
  { src: potro, desc: 'Descripción de otra imagen' },
  { src: potro, desc: 'Descripción de la tercera imagen' },
  { src: potro, desc: 'Descripción de otra imagen' },
  { src: potro, desc: 'Descripción de la tercera imagen' },
  { src: potro, desc: 'Descripción de otra imagen' },
  { src: potro, desc: 'Descripción de la tercera imagen' },
  { src: potro, desc: 'Descripción de otra imagen' },
  { src: potro, desc: 'Descripción de la tercera imagen' },
  { src: potro, desc: 'Descripción de otra imagen' },
  { src: potro, desc: 'Descripción de la tercera imagen' },
  // Agrega más objetos de imagen según sea necesario
];

export const Sliders = () => {
  const [modalImage, setModalImage] = useState<StaticImageData | null>(null);
  const [description, setDescription] = useState<string | null>(null);

  // Función para abrir el modal con la imagen seleccionada y descripción
  const handleImageClick = (imageSrc: StaticImageData, imageDesc: string) => {
    setModalImage(imageSrc);
    setDescription(imageDesc);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalImage(null);
    setDescription(null);
  };

  // Función para cerrar el modal al hacer clic fuera de la imagen
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <SliderWrapper>
      <Swiper
        spaceBetween={10}
        slidesPerView={1} // Muestra una sola imagen en móviles
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2, // Muestra 2 imágenes en pantallas pequeñas
            navigation: false, // Oculta las flechas en pantallas pequeñas
          },
          768: {
            slidesPerView: 3, // Muestra 3 imágenes en pantallas medianas
            navigation: true, // Muestra las flechas en pantallas medianas y grandes
          },
          1024: {
            slidesPerView: 4, // Muestra 4 imágenes en pantallas grandes
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Slide onClick={() => handleImageClick(image.src, image.desc)}>
              <ImageWrapper>
                <Image
                  src={image.src}
                  alt={`Imagen ${index + 1}`}
                  height={300}
                  width={400}
                  layout="responsive" // Hace que la imagen sea responsiva
                />
              </ImageWrapper>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal para la imagen */}
      <ModalOverlay isOpen={modalImage !== null} onClick={handleOverlayClick}>
        <ModalContent>
          <CloseButton onClick={closeModal}>×</CloseButton>
          {modalImage && (
            <>
              <ImageInModal
                src={modalImage}
                alt='Imagen ampliada'
                height={600}
                width={800}
              />
              <Description>{description}</Description> {/* Descripción debajo de la imagen */}
            </>
          )}
        </ModalContent>
      </ModalOverlay>
    </SliderWrapper>
  );
};
