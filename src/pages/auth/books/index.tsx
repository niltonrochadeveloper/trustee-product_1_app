import React from "react";
// import { useAppDispatch, useAppSelector, useActions } from "@/hooks/useStore";
import useStore from "@/hooks/useStore";

const Page = () => {
  const { useAppDispatch, useAppSelector, actions } = useStore();

  const mode = useAppSelector((state) => state.theme.mode);
  const prods = useAppSelector((state) => state.product.items);
  const { products, theme } = actions;
  const dispatch = useAppDispatch();

  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-2 ">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Tema: {mode} na porta 3001 na tela de Books
          </h2>
          <button onClick={() => dispatch(theme.setTheme())}>
            Mudar tema global na porta 3001
          </button>
          <button
            onClick={() =>
              dispatch(
                products.addProduct({
                  id: prods.length <= 0 ? 1 : prods.length + 1,
                  name: `Produto ${
                    prods.length <= 0 ? 1 : prods[prods.length - 1]?.id + 1
                  }`,
                  price: 300,
                })
              )
            }
          >
            Adicionar Produto
          </button>
          <>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Books list:
            </h2>
            {prods?.map((item) => (
              <>
                <p>{item.name}</p>
              </>
            ))}
          </>
          <button onClick={() => dispatch(products.removeProduct(2))}>
            remover produto
          </button>
          <button onClick={() => dispatch(products.deleteLastProduct())}>
            remover último produto
          </button>
          <button onClick={() => dispatch(products.resetProducts())}>
            resetar estado do produto
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"></div>
      </div>
    </div>
  );
};

export default Page;
