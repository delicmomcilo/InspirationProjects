import React, { useCallback, useEffect, useRef, useState } from "react";
import UtilityButton from "./UtilityButton";
import { Container, Line, InnerContainer } from "./slider/slider.styles";
import { ButtonRef, IProps } from './slider/slider.types';

const Slider = ({
  onChange = f => f,
  initialValue,
  className
}: IProps): JSX.Element => {
  const hasInited = useRef(false);
  const [firstButtonRef, setFirstButtonRef] = useState<ButtonRef>(null!);
  const [secondButtonRef, setSecondButtonRef] = useState<ButtonRef>(null!);
  const innerContainerRef = useRef<HTMLDivElement>(null!);
  const lineRef = useRef<HTMLDivElement>(null!);
  const firstCallback = useCallback(node => {
    if (node !== null) setFirstButtonRef({ current: node });
  }, []);
  const secondCallback = useCallback(node => {
    if (node !== null) setSecondButtonRef({ current: node });
  }, []);
  const [BTN_WIDTH, setBtnWidth] = useState<number>(0);
  const [CONTAINER_WIDTH, setContainerWidth] = useState<number>(0);
  const [lineWidth, setLineWidth] = useState<number>(0);
  const [lineLeft, setLineLeft] = useState<number>(0);
  const [firstButtonLeft, setFirstButtonLeft] = useState<number>(0);
  const [secondButtonLeft, setSecondButtonLeft] = useState<number>(0);
  const initialLeft = initialValue?.left;
  const initialRight = initialValue?.right;
  const setFirst = (value: number) => {
    if (firstButtonRef.current) {
      setFirstButtonLeft(value);
      setLineLeft(value + BTN_WIDTH / 2);
      setLineWidth(secondButtonLeft - value);
    }
  };
  const setSecond = (value: number) => {
    setSecondButtonLeft(value);
    setLineWidth(value - firstButtonLeft);
  };

  const move = (
    set: typeof setFirst | typeof setSecond,
    min: number | null,
    max: number | null,
    e: MouseEvent | React.MouseEvent<HTMLDivElement> | Touch
  ) => {
    const rect = innerContainerRef.current.getBoundingClientRect();
    const isBetween = e.clientX <= rect.right && e.clientX >= rect.left;
    const isMax =
      (max && e.clientX - rect.left >= max) ||
      e.clientX + BTN_WIDTH >= rect.right;
    const isMin =
      (min && e.clientX - rect.left <= min) || e.clientX <= rect.left;
    if (isBetween && !isMax && !isMin) {
      set(e.clientX - rect.left);
    } else if (isMax) {
      set(max || rect.width - BTN_WIDTH);
    } else if (isMin) {
      set(min || 0);
    }
  };

  const init = () => {
    const btnWidth = firstButtonRef.current.getBoundingClientRect().width;
    const containerWidth = innerContainerRef.current.getBoundingClientRect()
      .width;
    setBtnWidth(btnWidth);
    setContainerWidth(containerWidth);
    setLineLeft(btnWidth / 2);
    if (
      typeof initialRight === "number" &&
      typeof initialLeft === "number" &&
      initialLeft >= 0 &&
      initialRight >= 0 &&
      initialLeft <= 1 &&
      initialRight <= 1 &&
      initialRight >= initialLeft
    ) {
      const left = initialLeft * (containerWidth - btnWidth);
      const right = initialRight * (containerWidth - btnWidth);
      setFirstButtonLeft(left);
      setSecondButtonLeft(right);
      setLineLeft(left + btnWidth / 2);
      setLineWidth(right - left);
    }
  };

  useEffect(() => {
    // Just re-initialize when resizing.
    const resizeListener = () => {
      init();
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [firstButtonLeft, secondButtonLeft]);

  const handleFirstButtonMouseMove = (
    e: MouseEvent | React.MouseEvent<HTMLDivElement>
  ) => {
    move(setFirst, null, secondButtonLeft, e);
  };
  const handleSecondButtonMouseMove = (
    e: MouseEvent | React.MouseEvent<HTMLDivElement>
  ) => move(setSecond, firstButtonLeft, null, e);

  const handleFirstButtonTouchMove = (
    e: TouchEvent
  ) => {

    move(setFirst, null, secondButtonLeft, e.touches[0]);
  };
  const handleSecondButtonTouchMove = (
    e: TouchEvent
  ) => {
    move(setSecond, firstButtonLeft, null, e.touches[0]);
  };

  const handleFirstButtonMouseUp = () => {
    document.removeEventListener("mouseup", handleFirstButtonMouseUp, true);
    document.removeEventListener("touchend", handleFirstButtonMouseUp, true);
    document.removeEventListener("mousemove", handleFirstButtonMouseMove, true);
    document.removeEventListener("touchmove", handleFirstButtonTouchMove, true);
  };
  const handleFirstButtonMouseDown = () => {
    document.addEventListener("mouseup", handleFirstButtonMouseUp, true);
    document.addEventListener("touchend", handleFirstButtonMouseUp, true);
    document.addEventListener("mousemove", handleFirstButtonMouseMove, true);
    document.addEventListener("touchmove", handleFirstButtonTouchMove, true);
  };
  const handleSecondButtonMouseUp = () => {
    document.removeEventListener("mouseup", handleSecondButtonMouseUp, true);
    document.removeEventListener("touchend", handleSecondButtonMouseUp, true);
    document.removeEventListener(
      "touchmove",
      handleSecondButtonTouchMove,
      true
    );
    document.removeEventListener(
      "mousemove",
      handleSecondButtonMouseMove,
      true
    );
  };
  const handleSecondButtonMouseDown = () => {
    document.addEventListener("mouseup", handleSecondButtonMouseUp, true);
    document.addEventListener("touchend", handleSecondButtonMouseUp, true);
    document.addEventListener("mousemove", handleSecondButtonMouseMove, true);
    document.addEventListener("touchmove", handleSecondButtonTouchMove, true);
  };

  const handleOnLineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const secondButtonX = secondButtonRef.current.getBoundingClientRect().x;
    const firstButtonX = firstButtonRef.current.getBoundingClientRect().x;
    const {
      x: lineX,
      width: lineWidth
    } = lineRef.current.getBoundingClientRect();
    if (e.clientX > secondButtonX) {
      move(setSecond, firstButtonLeft, null, e);
    } else if (e.clientX < firstButtonX) {
      move(setFirst, null, secondButtonLeft, e);
    } else if (e.clientX > lineWidth / 2 + lineX) {
      move(setSecond, firstButtonLeft, null, e);
    } else if (e.clientX < lineWidth / 2 + lineX) {
      move(setFirst, null, secondButtonLeft, e);
    }
  };

  useEffect(() => {
    const left =
      firstButtonLeft > 0 ? firstButtonLeft / (CONTAINER_WIDTH - BTN_WIDTH) : 0;
    const right =
      secondButtonLeft > 0
        ? secondButtonLeft / (CONTAINER_WIDTH - BTN_WIDTH)
        : 0;
    onChange({ left, right });
  }, [firstButtonLeft, secondButtonLeft]);

  useEffect(() => {
    // HACK: Ensure that the refs have been properly drawn before measuring initial values.
    // In some scenarios in production code the refs will have entered the DOM, but have "0" on all
    // size attributes.
    if (
      !hasInited?.current &&
      innerContainerRef?.current &&
      firstButtonRef?.current &&
      secondButtonRef?.current
    ) {
      hasInited.current = true;
      setTimeout(() => {
        init();
      }, 1);
    }
  }, [firstButtonRef, secondButtonRef, initialLeft, initialRight]);

  return (
    <Container className={className}>
      <InnerContainer
        role="button"
        ref={innerContainerRef}
        onClick={handleOnLineClick}
      >
        <Line
          ref={lineRef}
          style={{ width: `${lineWidth}px`, left: `${lineLeft}px` }}
        />
        <UtilityButton
          ref={firstCallback}
          style={{ left: `${firstButtonLeft}px` }}
          onTouchStart={handleFirstButtonMouseDown}
          onMouseDown={handleFirstButtonMouseDown}
        />
        <UtilityButton
          ref={secondCallback}
          style={{ left: `${secondButtonLeft}px` }}
          onTouchStart={handleSecondButtonMouseDown}
          onMouseDown={handleSecondButtonMouseDown}
        />
      </InnerContainer>
    </Container>
  );
};

export default Slider;
