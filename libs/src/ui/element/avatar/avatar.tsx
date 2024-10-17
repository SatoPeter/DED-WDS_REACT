import React from 'react';
import { IdleIcon, OnlineIcon, BusyIcon, OfflineIcon } from '@src/assets';
import { getSizeClass, getStatusClass, getShapeClass } from './styled';
import { getAbbrFullName } from '@src/utils';

const getStatusIcon = (size: string, status: string) => {
  const sizeClass = getSizeClass('avatar-icon', size);
  const statusClass = getStatusClass('avatar-icon', status);

  const statusIcons: {
    [key: string]: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & { title?: string | undefined }
    >;
  } = {
    online: OnlineIcon,
    idle: IdleIcon,
    busy: BusyIcon,
    offline: OfflineIcon,
  };
  const StatusIcon = statusIcons[status];

  return StatusIcon ? (
    <StatusIcon className={`avatar-icon ${sizeClass} ${statusClass}`} />
  ) : null;
};

export interface AvatarProps {
  size: 'small' | 'medium' | 'large';
  shape: 'circle' | 'square';
  userName: string;
  status?: 'online' | 'busy' | 'idle' | 'offline';
  imgSrc?: string;
  alt?: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  const { size, shape, userName, status, imgSrc, alt } = props;

  return (
    <div
      className={`avatar-container 
        ${getSizeClass('avatar-container', size)}`}
    >
      <div className={`avatar ${getShapeClass('avatar', shape)}`}>
        {imgSrc ? (
          <img className="avatar-pic" src={imgSrc} alt={alt} />
        ) : (
          <span className={`avatar-text ${getSizeClass('text', size)}`}>
            {getAbbrFullName(userName, 2)}
          </span>
        )}
      </div>
      {status === 'online' && getStatusIcon(size, 'online')}
      {status === 'idle' && getStatusIcon(size, 'idle')}
      {status === 'busy' && getStatusIcon(size, 'busy')}
      {status === 'offline' && getStatusIcon(size, 'offline')}
    </div>
  );
};
export default Avatar;
