import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { WishLists } from "./pages/WishLists";
import { WishList } from "./pages/WishList";
import { Search } from "./pages/Search";
import { Checkout } from "./pages/Checkout";
import { NoMatch } from "./pages/NoMatch";
import { getRandomSearchTerm } from "./utils/getRandomSearchTerm";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home query={getRandomSearchTerm()} />} />
      <Route path="/wishlist" element={<WishLists />} />
      <Route path="/wishlist/:wishListId" element={<WishList />} />
      <Route path="/search" element={<Search />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/*" element={<NoMatch />} />
    </Routes>
  );
};
