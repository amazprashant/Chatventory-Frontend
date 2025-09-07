import React from "react";
import type { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const RolesModal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // don’t render if modal is closed

  return ReactDOM.createPortal(
    <div className="modal-backdrop fade show"
        style={{ zIndex: 1040 }}
        onClick={onClose}>

      <div className="modal fade show d-block"
        style={{ zIndex: 1050 }}
        role="dialog">

    <div className="modal-backdrop show">
      <div className="modal d-block" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            {title && (
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                ></button>
              </div>
            )}
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                <i className="bi bi-x-circle me-1"></i> Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      </div>,
    document.body // portal target
  );
};

export default RolesModal;
