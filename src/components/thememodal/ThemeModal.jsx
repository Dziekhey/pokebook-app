import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";
import { useTheme } from "../../services/ThemeProvider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 180,
  bgcolor: "#E1E1E1",
  boxShadow: 24,
  p: 2,
  borderRadius: 5,
};

const primary = "#E85382";
const blue = "#39BADF";
const yellow = "#E1A725";

const ThemeModal = ({ open, handleClose }) => {
  const { currentTheme } = useTheme();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-center pb-5">
            <h1 className="font-bold text-xl">Choose Theme</h1>
          </div>
          <Divider />
          <div className="flex justify-center">
            <div className="flex my-3">
              <div>
                <button
                  style={{ backgroundColor: primary }}
                  className="mr-6 w-10 h-10 md:w-16 md:h-16 rounded-full focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-2"
                  onClick={() => currentTheme(primary)}
                ></button>
              </div>
              <div>
                <button
                  style={{ backgroundColor: blue }}
                  className="mr-6 w-10 h-10 md:w-16 md:h-16 rounded-full focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-2"
                  onClick={() => currentTheme(blue)}
                ></button>
              </div>
              <div>
                <button
                  style={{ backgroundColor: yellow }}
                  className="w-10 h-10 md:w-16 md:h-16 rounded-full focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-2"
                  onClick={() => currentTheme(yellow)}
                ></button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ThemeModal;
