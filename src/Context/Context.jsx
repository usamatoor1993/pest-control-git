import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context
const MyContext = createContext();

// Custom hook to use the context
export const useMyContext = () => useContext(MyContext);

// Context provider component
export const MyContextProvider = ({ children }) => {
  const [documentID, setDocumentID] = useState(() => {
    const saveddocumentID = localStorage.getItem("documentId");
    return saveddocumentID ? JSON.parse(saveddocumentID) : null;
  });

  const [images, setImages] = useState(() => {
    const storedImages = localStorage.getItem("images");
    return storedImages ? JSON.parse(storedImages) : [];
  });

  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
  }, [images]);

  useEffect(() => {
    if (documentID !== null) {
      localStorage.setItem("documentId", JSON.stringify(documentID));
    }
  }, [documentID]);

  const [pageHeading, setPageHeading] = useState(() => {
    const savedPageHeading = localStorage.getItem("pageHeading");
    return savedPageHeading ? JSON.parse(savedPageHeading) : "Dashboard";
  });
  useEffect(() => {
    if (pageHeading !== null) {
      localStorage.setItem("pageHeading", JSON.stringify(pageHeading));
    }
  }, [pageHeading]);

  const [openLogout, setOpenLogout] = useState(false);
  const [openAddInspector, setOpenAddInspector] = useState(false);
  const [openEditInspector, setOpenEditInspector] = useState(false);
  const [openDeleteInspector, setOpenDeleteInspector] = useState(false);
  const [openCreateOrder, setOpenCreateOrder] = useState(false);
  const [openOrderDetail, setOpenOrderDetail] = useState(false);
  const [openAssignInspector, setOpenAssignInspector] = useState(false);
  const [openDeletePest, setOpenDeletePest] = useState(false);
  const [openEditPest, setOpenEditPest] = useState(false);
  const [openAddPest, setOpenAddPest] = useState(false);
  const [openDeleteTreatment, setOpenDeleteTreatment] = useState(false);
  const [openEditTreatment, setOpenEditTreatment] = useState(false);
  const [openAddTreatment, setOpenAddTreatment] = useState(false);
  const [inspectorId, setInspectorId] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [activeOrderId, setActiveOrderId] = useState(null);
  const [historyOrderId, setHistoryOrderId] = useState(null);
  const [inspectorIdForAssign, setInspectorIdForAssign] = useState(null);
  const [inspectorData, setInspectorData] = useState({});
  const [pestId, setPestId] = useState("");
  const [pestName, setPestName] = useState("");
  const [treatmentName, setTreatmentName] = useState("");
  const [treatmentId, setTreatmentId] = useState("");
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [toaster, setToaster] = useState(0);

  return (
    <MyContext.Provider
      value={{
        images,
        setImages,
        pageHeading,
        setPageHeading,
        openLogout,
        setOpenLogout,
        openAddInspector,
        setOpenAddInspector,
        openEditInspector,
        setOpenEditInspector,
        openDeleteInspector,
        setOpenDeleteInspector,
        openCreateOrder,
        setOpenCreateOrder,
        openOrderDetail,
        setOpenOrderDetail,
        openAssignInspector,
        setOpenAssignInspector,
        inspectorId,
        setInspectorId,
        inspectorData,
        setInspectorData,
        openDeletePest,
        setOpenDeletePest,
        openEditPest,
        setOpenEditPest,
        openAddPest,
        setOpenAddPest,
        openAddTreatment,
        setOpenAddTreatment,
        openEditTreatment,
        setOpenEditTreatment,
        openDeleteTreatment,
        setOpenDeleteTreatment,
        pestId,
        setPestId,
        pestName,
        setPestName,
        treatmentId,
        setTreatmentId,
        treatmentName,
        setTreatmentName,
        openConfirmModal,
        setOpenConfirmModal,
        orderId,
        setOrderId,
        inspectorIdForAssign,
        setInspectorIdForAssign,
        activeOrderId,
        setActiveOrderId,
        historyOrderId,
        setHistoryOrderId,
        toaster, setToaster
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
