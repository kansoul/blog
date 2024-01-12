"use client";

import React from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const portalRoot = document.getElementById("portal");

  if (!portalRoot) {
    throw new Error("Portal root element not found in the document");
  }

  return ReactDOM.createPortal(children, portalRoot);
};

export default Portal;
