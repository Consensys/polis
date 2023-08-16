import { Gallery } from "./Gallery";
import CloseIcon from "./icons/CloseIcon";

type Props = {
  isLightboxOpen: boolean;
  screenshots?: string[];
  setIsLightboxOpen: (value: boolean) => void;
};

export const LightBox: React.FC<Props> = ({
  isLightboxOpen,
  screenshots,
  setIsLightboxOpen,
}) => {
  const handleClose = () => {
    setIsLightboxOpen(false);
  };

  if (!isLightboxOpen) return null;

  return (
    <div
      className="fixed flex gap-4 flex-col px-36 justify-center items-center w-screen h-full left-0 top-0 bg-black backdrop-blur-sm bg-opacity-50"
      aria-modal="true"
    >
      <button
        onClick={handleClose}
        className="w-full flex justify-end text-white"
        aria-label="Close lightbox"
      >
        <CloseIcon />
      </button>
      {screenshots?.length && (
        <Gallery
          screenshots={screenshots}
          imgAlt="screenshots"
          width={900}
          height={500}
        />
      )}
    </div>
  );
};