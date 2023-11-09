import { useParams } from "react-router-dom";

export const WishList = () => {
  const { wishListId } = useParams();

  return <div>WishList - {wishListId}</div>;
};
