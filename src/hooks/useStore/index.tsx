import store, {
  addProduct,
  removeProduct,
  resetProducts,
  setAuth,
  setCountDecrease,
  setCountIncrease,
  setTheme,
  RootState,
  deleteLastProduct,
} from "core/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const useStore = () => {
  const actions = {
    auth: { setAuth },
    theme: { setTheme },
    products: { addProduct, removeProduct, resetProducts, deleteLastProduct },
    count: { setCountDecrease, setCountIncrease },
  };

  type AppStore = ReturnType<typeof store>;

  // type RootState = ReturnType<AppStore["getState"]>;
  type AppDispatch = AppStore["dispatch"];

  const useAppDispatch = () => useDispatch<AppDispatch>();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  return { actions, useAppDispatch, useAppSelector };
};

// type AppDispatch = typeof store.dispatch;

// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export {
//   useAppDispatch, useAppSelector,
//   useActions,
// };

export default useStore;
