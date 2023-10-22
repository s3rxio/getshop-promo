import React, { createContext, useCallback, useState } from "react";
import Dialog from "./ui/Dialog";

type SetDialog = {
  children: React.ReactNode;
  extraChildren?: React.ReactNode;
};

interface DialogContextProps {
  setDialog: React.Dispatch<React.SetStateAction<SetDialog | null>>;
  unsetDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DialogProviderProps {
  children?: React.ReactNode;
}

export const DialogContext = createContext<DialogContextProps | null>(null);

export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const [dialog, setDialog] = useState<SetDialog | null>(null);
  const unsetDialog = useCallback(() => {
    setDialog(null);
  }, [setDialog]);

  return (
    <DialogContext.Provider value={{ setDialog, unsetDialog }}>
      {children}

      {dialog && (
        <Dialog
          dialog={dialog.children}
          unsetDialog={unsetDialog}
          extraChildren={dialog.extraChildren}
        />
      )}
    </DialogContext.Provider>
  );
};
