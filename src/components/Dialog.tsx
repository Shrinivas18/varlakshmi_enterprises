import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  open: boolean;
  onClose: () => void;
  type: "contact" | "social" | "licensing" | "";
};

const data = {

contact: {
  title: "Contact Us",
  content: (
    <>
      <Typography>
        📞 <a href="tel:+919876543210" style={{ color: "#00e5ff" }}>
          +91 92721 13100
        </a>
      </Typography>

      <Typography sx={{ mt: 1 }}>
        📧 <a href="mailto:your@email.com" style={{ color: "#00e5ff" }}>
          your@email.com
        </a>
      </Typography>

      <Typography sx={{ mt: 1 }}>
        📱 <a
          href="https://wa.me/919272113100"
          target="_blank"
          style={{ color: "#00e5ff" }}
        >
          WhatsApp Chat
        </a>
      </Typography>
    </>
  ),
},
  social: {
    title: "Social Links",
    content: (
      <>
        <Typography>📱 WhatsApp</Typography>
        <Typography sx={{ mt: 1 }}>📸 Instagram</Typography>
        <Typography sx={{ mt: 1 }}>📘 Facebook</Typography>
      </>
    ),
  },
  licensing: {
    title: "Licensing",
    content: (
      <Typography>
        All products are certified and follow industry standards.
      </Typography>
    ),
  },
};

function DialogBox({ open, onClose, type }: Props) {
  const current = type ? data[type] : null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          background: "rgba(0,0,0,0.9)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "white",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: { xs: "18px", sm: "22px" },
          color: "#00e5ff",
        }}
      >
        {current?.title}
        <IconButton onClick={onClose} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ mt: 1, fontSize: "1rem", color: "rgba(255,255,255,0.8)" }}>
          {current?.content}
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default DialogBox;