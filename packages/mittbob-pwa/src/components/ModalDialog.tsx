import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ModalDialog} from '@bob/core-components';
import { IProps } from '@bob/core-components/build/modalDialog/modalDialog.types';
import { changeBrowserThemeColor } from '../redux/modules/ui/app/actions';
import { RootState } from '../redux/rootState';

const ModalDialogWrappedWithThemeColor = ({ onClose, open, ...other }: IProps): JSX.Element => {
  const browserThemeColor = useSelector(
    ({ ui: { app } }: RootState) => app.browserThemeColor,
  );
  const previousBrowserThemeColor = useRef(browserThemeColor);
  const modalThemeColor = 'rgba(0,0,0,0.4)';
  const dispatch = useDispatch();

  useEffect(() => {
    if (browserThemeColor !== modalThemeColor) {
      previousBrowserThemeColor.current = browserThemeColor;
    }
  }, [browserThemeColor]);
  useEffect(() => {
    const themeColor = open
      ? modalThemeColor
      : previousBrowserThemeColor.current;
    dispatch(changeBrowserThemeColor(themeColor));
  }, [dispatch, open, modalThemeColor]);

  const handleClose = (): void => {
    dispatch(changeBrowserThemeColor(previousBrowserThemeColor.current));
    onClose && onClose();
  };
  return <ModalDialog open={open} onClose={onClose ? handleClose : undefined} {...other} />;
};

export default ModalDialogWrappedWithThemeColor;
