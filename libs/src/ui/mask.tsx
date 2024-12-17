import { ReactNode } from 'react';

export interface MaskProps {
  className?: string;
  onClose?: () => void;
  children: ReactNode;
}

export const Mask: React.FC<MaskProps> = ({
  className = '',
  onClose,
  children,
}) => {
  return (
    <div className={`mask-overlay ${className}`} onClick={onClose}>
      {children}/
    </div>
  );
};
