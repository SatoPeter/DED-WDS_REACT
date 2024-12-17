import { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Toast, ToastProps } from '@src/ui/module/toast';

interface ToastItem extends ToastProps {
  id: number;
  createdAt: number;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    if (toasts.length === 0) return;

    const sortedToasts = [...toasts].sort((a, b) => a.createdAt - b.createdAt);
    const oldestToast = sortedToasts[0];

    const timer = setTimeout(() => {
      if (oldestToast.duration === 0) return;
      removeToast(oldestToast.id);
    }, oldestToast.duration);

    return () => clearTimeout(timer);
  }, [toasts]);

  const addToast = useCallback((toast: ToastProps) => {
    const id = Date.now();
    setToasts((prev) => [
      ...prev,
      {
        ...toast,
        id,
        createdAt: id,
        themeColor: toast.themeColor || 'primary',
        prefix: toast.prefix || null,
        title: toast.title,
        content: toast.content,
        duration: toast.duration,
      },
    ]);
    return id;
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const ToastContainer = useCallback(() => {
    if (toasts.length === 0) return null;

    return ReactDOM.createPortal(
      <div className="ded-toast-container">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>,
      document.body
    );
  }, [toasts, removeToast]);

  return { addToast, ToastContainer };
};
