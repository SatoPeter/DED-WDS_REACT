import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  children: ReactNode;
  customRootId?: string;
}

export const Portal = ({ children, customRootId }: PortalProps) => {
  let portalRoot;
  const rootId = customRootId || 'portal-root';

  if (document.getElementById(rootId)) {
    portalRoot = document.getElementById(rootId);
  } else {
    const divDom = document.createElement('div');
    divDom.id = rootId;
    document.body.appendChild(divDom);
    portalRoot = divDom;
  }
  return ReactDOM.createPortal(children, portalRoot as Element);
};

export default Portal;
