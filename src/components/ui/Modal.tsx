import { PropsWithChildren } from "react";

interface ModalProps {
  visible: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({
  visible,
  setter,
  children,
}: PropsWithChildren<ModalProps>) => {
  const handleModalClose = () => {
    setter(false);
  };

  return (
    <div
      className={`${
        visible ? "scale-100" : "scale-0"
      } transition-all duration-200 ease-out fixed flex justify-center items-center top-0 right-0 bottom-0 left-0 bg-gray bg-opacity-80 dark:bg-lightGreen dark:bg-opacity-70 z-50`}
      onClick={handleModalClose}
    >
      <div className="w-full max-w-[650px] bg-veryLightGray rounded-xl shadow-md p-16 dark:bg-paleGreen lg:w-1/2">
        {children}
      </div>
    </div>
  );
};

export default Modal;
