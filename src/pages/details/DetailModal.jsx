import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import sample from "../../assets/logo.png";
import About from "../../components/About";
import Stats from "../../components/Stats";
import Similar from "../../components/Similar";
import DetailTabs from "../../components/DetailTabs";

const style = {
  position: "absolute",
  left: "58%",
  width: 575,
  height: 650,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

const DetailModal = ({ open, handleClose }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-40 w-full items-center justify-center rounded-lg relative">
            <button onClick={handleClose} className="absolute">
              <ArrowBackIcon
                sx={{ width: "40px", height: "40px" }}
                className="absolute bg-white p-2 m-2 rounded-lg"
              />
            </button>
            <img
              src={sample}
              alt="Pokemon"
              className="w-64 h-64 object-contain absolute left-1/2 transform -translate-x-1/2"
            />
          </div>
          <div className="">
            <h1 className="flex justify-center mt-12 font-bold text-3xl">
              Ivysaur
            </h1>
            <div className="pb-5">
              <h3 className="flex justify-center rounded-2xl bg-[#E1E1E1] my-3">
                type
              </h3>
            </div>
          </div>
          <div className="flex justify-center w-[510px] h-[215px] ">
            {selectedTab === 0 && <About />}
            {selectedTab === 1 && <Stats />}
            {selectedTab === 2 && <Similar />}
          </div>
          <div className="flex justify-center">
            <DetailTabs selectedTab={selectedTab} handleChange={handleChange} />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DetailModal;
