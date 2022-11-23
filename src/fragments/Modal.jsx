import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center`}
    >
      <div
        className={`${
          visible ? "openModalFade" : "closeModalFade"
        } bg-white p-5 rounded w-4/5 md:w-auto block relative`}
      >
        <div className="absolute -top-5 -right-5">
          <button
            onClick={onClose}
            className="border-[3px] border-gold text-white bg-black
            rounded-lg font-medium text-base p-2 mt-1"
          >
            <AiOutlineClose />
          </button>
        </div>
        <p className="break-all">
          0xbab1813a179d2799283d8e3f4d5521805e024a7b9a00830f6d5082145f9627ef
        </p>
      </div>
    </div>
  );
};

export default Modal;
