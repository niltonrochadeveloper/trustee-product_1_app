"use client";

import { Provider, ProviderProps } from "react-redux";

const ReduxProvider = ({ children, store, ...rest }: ProviderProps) => {
  return (
    <Provider store={store} {...rest}>
      {children}
    </Provider>
  );
};

export default ReduxProvider;
