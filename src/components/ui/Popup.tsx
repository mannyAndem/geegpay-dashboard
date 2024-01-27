import { PropsWithChildren } from "react";

interface ModalProps {
  visible: boolean;
}

const Popup = ({ visible, children }: PropsWithChildren<ModalProps>) => {
  return (
    <div
      className={`${
        visible ? "scale-y-100" : "scale-y-0"
      } origin-top transition-all duration-200 ease-out bg-white p-3 rounded-lg shadow-md dark:bg-paleGreen`}
    >
      {children}
    </div>
  );
};

export default Popup;
