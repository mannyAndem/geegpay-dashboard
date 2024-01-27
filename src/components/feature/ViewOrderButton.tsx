import { useState } from "react";
import documentIcon from "../../assets/icons/document-icon.svg";
import Modal from "../ui/Modal";
import { type Order } from "./OrderTable";

interface ViewOrderButtonProps {
  order: Order;
}

const ViewOrderButton = ({ order }: ViewOrderButtonProps) => {
  const [invoiceModalVisible, setInvoiceModalVisible] = useState(false);

  const openModal = () => {
    setInvoiceModalVisible(true);
  };
  return (
    <>
      <Modal setter={setInvoiceModalVisible} visible={invoiceModalVisible}>
        <div className="flex flex-col gap-4 font-jakarta text-dark">
          <div className="mb-8">
            <h3 className="text-xl font-semibold">Order</h3>
          </div>
          <div className="flex items-center justify-between">
            <span>Name:</span>
            <span>{order.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Date:</span>
            <span>{order.date}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Amount:</span>
            <span>${order.amount.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Status:</span>
            <span
              className={
                order.status === "paid"
                  ? "text-green capitalize"
                  : "text-red capitalize"
              }
            >
              {order.status}
            </span>
          </div>
        </div>
      </Modal>
      <button
        onClick={openModal}
        className="w-full flex items-center gap-2 transition-all duration-300 ease-out hover:scale-105"
      >
        <img src={documentIcon} />
        <span className="text-sm">View</span>
      </button>
    </>
  );
};

export default ViewOrderButton;
