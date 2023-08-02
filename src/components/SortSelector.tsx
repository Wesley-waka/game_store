import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState, sortOrder } from "../redux";

// interface Props {
//   onSelectSortOrder: (sortOrder: string) => void;
//   sortOrder: string;
// }
// { sortOrder, onSelectSortOrder }: Props
const SortSelector = () => {
  const selectSortOrderr = useSelector((s: RootState) => s.game.sortOrder);
  const dispatch = useDispatch();
  // dispatch(sortOrders());
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectSortOrderr
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by:{currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => dispatch(sortOrder(order.value))}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
