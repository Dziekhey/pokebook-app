import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import About from "../../components/detailpage/About";
import Stats from "../../components/detailpage/Stats";
import Similar from "../../components/detailpage/Similar";
import DetailTabs from "../../components/detailpage/DetailTabs";
import { Divider } from "@mui/material";
import { getDominantColor } from "../../services/DominantColor";

const DetailModal = ({ open, handleClose, singlePokemon }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [bgColor, setBgColor] = useState("");
  console.log(bgColor);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const getBgColor = async () => {
    if (singlePokemon?.sprites?.other["official-artwork"].front_default) {
      const color = await getDominantColor(
        singlePokemon.sprites.other["official-artwork"].front_default
      );
      if (color) setBgColor(color);
    }
  };

  useEffect(() => {
    getBgColor();
    // eslint-disable-next-line
  }, [singlePokemon]);

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
        <Box className="modal-box flex flex-col items-center justify-center">
          <div
            className="h-40 w-full items-center justify-center rounded-lg relative"
            style={{
              backgroundColor: bgColor ? `rgb(${bgColor})` : "transparent",
            }}
          >
            <button onClick={handleClose} className="absolute top-0 left-0">
              <ArrowBackIcon
                sx={{ width: "40px", height: "40px" }}
                className="bg-white p-2 m-2 rounded-lg"
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
          <div>
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
          <div className="flex justify-center w-full border-t h-auto lg:h-[215px]">
            {selectedTab === 0 && <About singlePokemon={singlePokemon} />}
            {selectedTab === 1 && <Stats singlePokemon={singlePokemon} />}
            {selectedTab === 2 && <Similar singlePokemon={singlePokemon} />}
          </div>
          <Divider className="pt-12 border-b" />
          <div className="flex justify-center border-t w-full">
            <DetailTabs selectedTab={selectedTab} handleChange={handleChange} />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DetailModal;
