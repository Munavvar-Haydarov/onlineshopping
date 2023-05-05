import { type } from "os";
import { createContext, useState, useContext, FC, ReactNode } from "react";

interface ProductList {
  // Define the properties of donorContent object here
}

interface ProductListContextType {
  productlist: ProductList[];
  setProductList: React.Dispatch<React.SetStateAction<ProductList[]>>;
}

const ProductListContext = createContext<ProductListContextType>({
  productlist: [],
  setProductList: () => {},
});
export const ProductListProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [productlist, setProductList] = useState<ProductList[]>([]);
  return (
    <ProductListContext.Provider value={{ productlist, setProductList }}>
      {children}
    </ProductListContext.Provider>
  );
};

export const useProductListContext = () => useContext(ProductListContext);

export default ProductListContext;
