import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, Box, Title, Body, ConfirmButton } from "./Modal.styles";

function Modal({ title, children, onClose }) {
  //ESC 닫기
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return createPortal(
    // 반투명 배경인 경우 닫기
    <Overlay onClick={onClose}>
      {/* 이벤트 버블링 막기 */}
      <Box role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <Title>{title}</Title>
        <Body>{children}</Body>
        <ConfirmButton onClick={onClose} autoFocus>
          확인
        </ConfirmButton>
      </Box>
    </Overlay>,
    document.getElementById("modal-root"),
  );
}

export default Modal;
