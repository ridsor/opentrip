import { createContext } from "react";

const DestinationContext = createContext<{
  filter: boolean;
  toggleFilter: () => void;
}>({
  filter: false,
  toggleFilter() {},
});

export default DestinationContext;
