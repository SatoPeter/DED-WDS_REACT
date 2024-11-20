import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  fluid?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  fluid = false,
}) => {
  return (
    <div className={fluid ? 'container-fluid' : 'container'}>{children}</div>
  );
};

export default Container;
