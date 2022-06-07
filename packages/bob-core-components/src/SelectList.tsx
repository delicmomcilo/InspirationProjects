import React, { useEffect, useMemo, useRef, useState } from "react";
import { List } from "./selectList/selectList.styles";
import { IProps } from "./selectList/selectList.types";
import { withDefaultTheme } from './ThemeProvider';

const SelectList = ({ children, onSelect }: IProps): JSX.Element => {
  const childrenArray = useMemo(
    () => React.Children.toArray(children) as IProps["children"],
    [children]
  );

  const listRef = useRef<HTMLUListElement>(null!);

  const childSelected = useMemo(() => {
    let key = null;
    childrenArray.forEach(child => {
      if (child.props.selected) key = child.key;
    });
    return key;
  }, [childrenArray]);

  const [selectedKey, setSelectedKey] = useState<string | null>(childSelected);

  useEffect(() => {
    setSelectedKey(childSelected);
  }, [childSelected]);

  const [hasFocus, setHasFocus] = useState(false);

  const selectNextChild = (e: KeyboardEvent) => {
    let index = childrenArray.findIndex(c => c.key && c.key === selectedKey);
    const outOfBounds = index + 1 >= childrenArray.length;
    index = outOfBounds ? childrenArray.length - 1 : index + 1;
    if (!outOfBounds) {e.preventDefault(); e.stopPropagation();}
    setSelectedKey(childrenArray[index].key as string);
  };
  const selectPreviousChild = (e: KeyboardEvent) => {
    let index = childrenArray.findIndex(c => c.key === selectedKey);
    const outOfBounds = index - 1 < 0;
    index = outOfBounds ? 0 : index - 1;
    if (!outOfBounds) {e.preventDefault(); e.stopPropagation();}
    setSelectedKey(childrenArray[index].key as string);
  };
  const downHandler = (e: KeyboardEvent) => {
    const { key } = e;
    switch (key) {
      case "ArrowDown":
        selectNextChild(e);
        break;
      case "ArrowUp":
        selectPreviousChild(e);
        break;
      case "Enter":
        {
          if (selectedKey !== null) {
            onSelect(selectedKey);
          }
        }
        break;
      default:
        break;
    }
  };
  const handleOnFocus = () => {
    setHasFocus(true);
  };
  const handleOnBlur = () => {
    setHasFocus(false);
  };
  const handleItemClick = (key: string) => {
    setSelectedKey(key);
    onSelect(key);
  };

  useEffect(() => {
    if (hasFocus) {
      window.addEventListener("keydown", downHandler);
    }

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  });

  useEffect(() => {
    listRef.current.focus();
    setHasFocus(true);
  }, []);

  return (
    <List
      ref={listRef}
      tabIndex={-1}
      autoFocus
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      {childrenArray.map(item => {
        return {
          ...item,
          props: {
            ...item.props,
            onClick: () => handleItemClick(item.key as string),
            selected: item.key === selectedKey ? true : undefined
          }
        };
      })}
    </List>
  );
};

export default withDefaultTheme(SelectList);
