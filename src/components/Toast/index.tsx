import React from 'react';

import { useSnackbar, OptionsObject, WithSnackbarProps } from 'notistack';

let useSnackbarRef: WithSnackbarProps;

interface IProps {
  setUseSnackbarRef: (showSnackbar: WithSnackbarProps) => void;
}

const InnerSnackbarUtilsConfigurator: React.FC<IProps> = (props: IProps) => {
  props.setUseSnackbarRef(useSnackbar());
  return null;
};

const setUseSnackbarRef = (useSnackbarRefProp: WithSnackbarProps) => {
  useSnackbarRef = useSnackbarRefProp;
};

export const ToastConfig = () => <InnerSnackbarUtilsConfigurator setUseSnackbarRef={setUseSnackbarRef} />;

export default {
  success(msg: string, options: OptionsObject = {}) {
    this.toast(msg, { ...options, variant: 'success' });
  },
  warning(msg: string, options: OptionsObject = {}) {
    this.toast(msg, { ...options, variant: 'warning' });
  },
  info(msg: string, options: OptionsObject = {}) {
    this.toast(msg, { ...options, variant: 'info' });
  },
  error(msg: string, options: OptionsObject = {}) {
    this.toast(msg, { ...options, variant: 'error' });
  },
  toast(msg: string, options: OptionsObject = {}) {
    useSnackbarRef.enqueueSnackbar(msg, options);
  }
};
