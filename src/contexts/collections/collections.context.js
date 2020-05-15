import { createContext } from "react";
// can create any types such as string, arrays, objects so on
// it stores as its initial state

import SHOP_DATA from "./shop.data";

const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;
