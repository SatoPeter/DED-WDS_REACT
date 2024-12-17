import { ArrowDownIcon } from '@src/assets';
import { useMenu } from '@src/hooks';
import { ItemProps } from '@src/hooks/useMenu';

/**
 * @interface MenuItemProps
 * @description 表示菜單項目的屬性。
 *
 * @property {ItemProps} item - 菜單項目的詳細信息。
 * @property {boolean} isCollapsed - 指示菜單是否折疊。
 * @property {string} [color] - 菜單項目的顏色（可選）。
 */
export interface MenuItemProps {
  item: ItemProps;
  isCollapsed: boolean;
  color?: string;
}

/**
 * `MenuItem` 是一個 React Functional Component，用於渲染菜單項目。
 *
 * @param {MenuItemProps} props - 組件的屬性。
 * @param {Object} props.item - 菜單項目的資料，包含 `title` 和 `icon`。
 * @param {string} [props.item.title=''] - 菜單項目的標題。
 * @param {string} [props.item.icon=''] - 菜單項目的圖標。
 * @param {boolean} [props.isCollapsed=false] - 指示菜單是否折疊。
 * @param {string} [props.color='#000000'] - 菜單項目的顏色。
 *
 * @returns {JSX.Element} 返回一個渲染的菜單項目。
 */
export const MenuItem: React.FC<MenuItemProps> = ({
  item = { title: '', prefix: '' },
  isCollapsed = false,
  color = '#000000',
}: MenuItemProps) => {
  const { isOpen, setIsOpen, contentRef, maxHeight, hasChildren } = useMenu(
    item,
    isCollapsed
  );

  return (
    <li className="ded-nav-item">
      <a
        href={item.path}
        style={{ color: color }}
        className="ded-nav-item-link"
        onClick={() => {
          if (item.path) {
            console.log('go to', item.path);
          }
        }}
      >
        <div className="ded-nav-item-icon">{item.prefix}</div>
        {!isCollapsed && (
          <span className="ded-nav-item-label">{item.title}</span>
        )}
      </a>

      {!isCollapsed && hasChildren && (
        <div className="ded-nav-item-arrow">
          <ArrowDownIcon
            width={24}
            height={24}
            fill={color}
            style={{
              transition: 'transform 0.3s',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
      )}
      <ul
        ref={contentRef}
        className="ded-nav-subitem"
        style={{
          maxHeight: maxHeight,
        }}
      >
        {hasChildren &&
          item.children?.map((child, index) => (
            <MenuItem
              key={index}
              item={child}
              isCollapsed={isCollapsed}
              color={color}
            />
          ))}
      </ul>
    </li>
  );
};
