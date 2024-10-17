import React, { useEffect, useState, useRef } from 'react';
import { Avatar, AvatarProps } from '@src/ui/element/avatar';
import { List, Button } from '@src/ui';
import { splitArray } from '@src/utils';
import { ItemProps } from '../list/item';
import Portal from '@src/ui/portal';
import { getTargetPosition } from '@src/utils/position';
import { usePosition } from '@src/hooks/usePosition';

interface AvatarGroupProps {
  users: AvatarProps[];
  placement:
    | 'top-left'
    | 'top'
    | 'top-right'
    | 'right-top'
    | 'right'
    | 'right-bottom'
    | 'bottom-right'
    | 'bottom'
    | 'bottom-left'
    | 'left-bottom'
    | 'left'
    | 'left-top';
  limit: number;
  className?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = (
  props: AvatarGroupProps
) => {
  const { users, limit, placement, className, ...rest } = props;
  const restCount = users.length - limit;
  const result = splitArray(users, limit);

  const [menu, setMenu] = React.useState<ItemProps[]>([]);

  const [isVisible, setIsVisible] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);
  const { childrenSize, position } = usePosition(avatarRef);

  if (limit < 1) {
    throw new Error('Limit must be at least 1');
  }

  useEffect(() => {
    return setMenu(
      result.restList.map((user) => {
        return {
          prefix: (
            <Avatar
              size="small"
              shape="circle"
              userName={user.userName}
              imgSrc={user.imgSrc || ''}
            />
          ),
          content: {
            label: user.userName,
            value: user.userName,
            href: '',
          },
        };
      })
    );
  }, [result.restList]);

  return (
    <>
      <div className="avatar-group">
        {result.currList.map((user, index) => {
          const { shape, size, userName, status, imgSrc } = user;
          return (
            <Avatar
              key={index}
              shape={shape}
              size={size}
              userName={userName}
              status={status}
              imgSrc={imgSrc || ''}
              {...rest}
            />
          );
        })}

        {result.restList.map((user, index) => {
          // eslint-disable-next-line array-callback-return
          if (index !== 0) return;
          const { shape, size } = user;
          return (
            <div ref={avatarRef} key={index} className="rest-container">
              <Button
                variant="text"
                size="large"
                onClick={() => setIsVisible((prev) => !prev)}
              >
                <Avatar
                  shape={shape}
                  size={size}
                  userName={`+${restCount}`}
                  {...rest}
                ></Avatar>
              </Button>
            </div>
          );
        })}
      </div>
      <Portal>
        {isVisible && (
          <div
            style={getTargetPosition(position, childrenSize, placement, '6px')}
            className={`rest-container-menu ${className}`}
          >
            <List options={menu} isMenu />
          </div>
        )}
      </Portal>
    </>
  );
};
export default AvatarGroup;
