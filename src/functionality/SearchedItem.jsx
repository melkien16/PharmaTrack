import React from "react";
import Modal from "./Overlay";

const SearchedItem = (props) => {

  const closeModal = () => {
    setShowSearchedItem(false);
  };

  return (
    <Modal>
      <div className="flex flex-col items-center" onBlur={closeModal}>
        <h1 className="text-2xl font-bold text-red-950">Searched Item</h1>
        <p className="text-gray-700">This is the searched item</p>
      </div>
    </Modal>
  );
};

export default SearchedItem;
