import { CSSProperties } from "react";
import InfiniteLoader from "react-window-infinite-loader";
import { FixedSizeList } from "react-window";

import { InfiniteScrollProps } from "./infinite-scroll-types";

export default function InfiniteScroll<TYPE>({
  hasNextPage,
  items,
  loadNextPage,
  renderItem,
  scrollHeight,
  itemHeight,
}: InfiniteScrollProps<TYPE>) {
  const isItemLoaded = (index: number) => !hasNextPage || index < items.length;
  const itemCount = hasNextPage ? items.length + 1 : items.length;
  const Item = ({ index, style }: { index: number; style: CSSProperties }) => {
    if (index === itemCount) {
      return null;
    }
    return <div style={style}>{renderItem(items[index])}</div>;
  };

  return (
    <InfiniteLoader
      itemCount={itemCount}
      isItemLoaded={isItemLoaded}
      loadMoreItems={loadNextPage}
    >
      {({ onItemsRendered, ref }) => (
        <FixedSizeList
          itemCount={itemCount}
          onItemsRendered={onItemsRendered}
          ref={ref}
          width="100%"
          height={scrollHeight}
          itemSize={itemHeight}
        >
          {Item}
        </FixedSizeList>
      )}
    </InfiniteLoader>
  );
}
