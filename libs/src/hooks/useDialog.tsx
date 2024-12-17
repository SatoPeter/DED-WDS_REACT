import { on } from 'events';
import { useState, useCallback, ReactNode } from 'react';

interface DialogState {
  isOpen: boolean;
  header: React.ReactNode;
  content: React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
}

export const useDialog = ({
  isOpen,
  header,
  content,
  onOpen,
  onClose,
}: {
  isOpen: boolean;
  header: ReactNode;
  content: ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
}) => {
  const [dialogState, setDialogState] = useState<DialogState>({
    isOpen,
    header,
    content,
  });

  const openDialog = useCallback(() => {
    setDialogState({
      isOpen: true,
      header,
      content,
    });
    onOpen && onOpen();
  }, [content, header]);

  const closeDialog = useCallback(() => {
    setDialogState((prev) => ({
      ...prev,
      isOpen: false,
    }));
    onClose && onClose();
  }, []);

  return {
    ...dialogState, // 包含 isOpen, header, content
    openDialog,
    closeDialog,
  };
};
