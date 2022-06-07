import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Container, Card } from "./autocomplete/autocomplete.styles";
import { IProps, Option } from "./autocomplete/autocomplete.types";
import Input from "./Input";
import SelectList from "./SelectList";
import { ListItem } from "./List";
import {
  AnimationContainer,
  SelectListContainer
} from "./autocomplete/autocomplete.styles";
import Typography from "./Typography";

const Autocomplete = ({
  maxElementsInList = 5,
  getEmptyListComponent,
  getEmptyListLabel,
  getOptionLabel: getOptionLabelProp,
  onChange = f => f,
  options,
  inputProps = {},
  selectListProps = { onSelect: f => f, children: [] }
}: IProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const inputRef = useRef<HTMLInputElement>(null!);
  const [value, setValue] = useState("");
  const [showList, setShowList] = useState(false);
  const [selectListHasFocus, setSelectListHasFocus] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setShowList(true);
  };

  const focusSelectList = () => {
    if (containerRef.current?.childNodes?.length === 2) {
      const list = containerRef.current.childNodes[1].firstChild?.firstChild
        ?.firstChild as HTMLUListElement;
      if (list?.focus) {
        list.focus();
        setSelectListHasFocus(true);
      }
    }
  };

  const focusInput = () => {
    if (inputRef.current?.focus) {
      setSelectListHasFocus(false);
      inputRef.current.focus();
    }
  };

  const getOptionLabel = (o: Option) => {
    if (typeof o === "object") {
      if (!getOptionLabelProp)
        throw new Error("[Autocomplete] Objects need getOptionLabel function.");
      return getOptionLabelProp(o);
    }
    return o;
    // throw new Error("[Autocomplete] Only objects and strings are supported.");
  };

  const getOptionsList = () =>
    options
      .reduce((list: Array<any>, item) => {
        const label = getOptionLabel(item);
        if (label.toLowerCase().includes(value.toLowerCase())) {
          list.push(
            <ListItem
              selected={selectListHasFocus && list.length === 0}
              key={`autocomplete_item_${label}`}
              dense
            >
              {label}
            </ListItem>
          );
        }
        return list;
      }, [])
      .slice(0, maxElementsInList);
  const list = getOptionsList();
  const length = list.length;
  if (list.length === 0 && getEmptyListLabel) {
    const label = getEmptyListLabel();
    list.push(
      <ListItem
        selected={selectListHasFocus && list.length === 0}
        key={`autocomplete_item_${label}`}
        dense
      >
        <Typography color="light-grey" ><i>{label}</i></Typography>
      </ListItem>
    );
  }
  if (list.length === 0 && getEmptyListComponent) {
    list.push(getEmptyListComponent());
  }

  const handleOnSelectItem = (key: string) => {
    const inputValue = key.split(".$autocomplete_item_")[1];
    setValue(inputValue);
    setSelectListHasFocus(false);
    setShowList(false);
    const item = options.find(o => getOptionLabel(o) === inputValue);
    onChange(inputValue, item || null);
    focusInput();
  };

  const handleMouseDown = (e: MouseEvent) => {
    if (!containerRef.current.contains(e.target as Node)) {
      setShowList(false);
      setSelectListHasFocus(false);
    }
  };

  const downHandler = (e: KeyboardEvent) => {
    const { key } = e;
    if (value) {
      switch (key) {
        case "Enter": {
          if (length > 0 && e.target === inputRef.current) {
            const item = options.find(o => getOptionLabel(o) === value);
            onChange(value, item || null);
          }
        }
        case "ArrowUp":
        case "ArrowDown": {
          if (length > 0) {
            setShowList(true);
            focusSelectList();
          }
          break;
        }
        case "Backspace":
        case "Escape":
          setShowList(false);
          focusInput();
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown, false);
    window.addEventListener("keydown", downHandler);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown, false);
      window.removeEventListener("keydown", downHandler);
    };
  });

  return (
    <Container ref={containerRef}>
      <Input
        {...inputProps}
        ref={inputRef}
        value={value}
        onChange={handleOnChange}
      />
      <AnimationContainer>
        <SelectListContainer open={showList} disabled={length === 0}>
          <Card>
            <SelectList {...selectListProps} onSelect={handleOnSelectItem}>
              {value && showList ? list : []}
            </SelectList>
          </Card>
        </SelectListContainer>
      </AnimationContainer>
    </Container>
  );
};

export default Autocomplete;
