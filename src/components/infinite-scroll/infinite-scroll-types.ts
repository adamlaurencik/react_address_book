import { ReactNode } from "react";

export interface InfiniteScrollProps<ITEM> {
  items: ITEM[];
  hasNextPage: boolean;
  loadNextPage: () => Promise<void>;
  renderItem: (item?: ITEM) => ReactNode;
  scrollHeight: number;
  itemHeight: number;
}
