import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import About from "../../components/About";
import Stats from "../../components/Stats";
import Similar from "../../components/Similar";
import DetailTabs from "../../components/DetailTabs";
import { Divider } from "@mui/material";

const style = {
  position: "absolute",
  left: "58%",
  width: 575,
  height: 650,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

const DetailModal = ({ open, handleClose, singlePokemon }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  if (!singlePokemon) {
    return <div>Loading.....</div>;
  }

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
              src={
                singlePokemon.sprites?.other["official-artwork"].front_default
              }
              alt="Pokemon"
              className="w-48 h-48 object-contain absolute left-1/2 transform -translate-x-1/2"
            />
          </div>
          <div className="">
            <h1 className="flex justify-center mt-8 font-bold text-3xl">
              {singlePokemon.name}
            </h1>
            <div className="flex justify-center pb-5">
              {singlePokemon.types?.map((poketype) => (
                <h3
                  key={poketype.type.name}
                  className="mx-2 mt-3 px-3 py-1 rounded-2xl bg-[#E1E1E1]"
                >
                  {poketype.type.name}
                </h3>
              ))}
            </div>
          </div>
          <Divider />
          <div className="flex justify-center w-[510px] h-[215px] ">
            {selectedTab === 0 && <About singlePokemon={singlePokemon} />}
            {selectedTab === 1 && <Stats singlePokemon={singlePokemon} />}
            {selectedTab === 2 && <Similar singlePokemon={singlePokemon} />}
          </div>
          <Divider className="pt-12" />
          <div className="flex justify-center">
            <DetailTabs selectedTab={selectedTab} handleChange={handleChange} />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DetailModal;
