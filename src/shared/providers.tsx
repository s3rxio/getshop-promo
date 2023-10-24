import React, { createContext, useCallback, useEffect, useState } from "react";
import { Dialog } from "./ui";

interface SetDialog {
  dialog: React.ReactNode;
  extraChildren?: React.ReactNode;

  onOpen?: () => void;
  onClose?: () => void;
}

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

interface DialogContextProps {
  setDialog: SetState<SetDialog | null>;
  unsetDialog: SetState<boolean>;
}
2;

interface DialogProviderProps {
  children?: React.ReactNode;
}

export const DialogContext = createContext<DialogContextProps | null>(null);

export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const [dialog, setDialog] = useState<SetDialog | null>(null);
  const unsetDialog = useCallback(() => {
    setDialog(null);
  }, [setDialog]);

  useEffect(() => {
    if (dialog?.onOpen) {
      dialog.onOpen();
    }

    return () => {
      if (dialog?.onClose) {
        dialog.onClose();
      }
    };
  }, [dialog]);

  return (
    <DialogContext.Provider value={{ setDialog, unsetDialog }}>
      {children}

      {dialog && (
        <Dialog
          dialog={dialog.dialog}
          unsetDialog={unsetDialog}
          extraChildren={dialog.extraChildren}
        />
      )}
    </DialogContext.Provider>
  );
};
