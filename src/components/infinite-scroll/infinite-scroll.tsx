import { CSSProperties } from "react";
import InfiniteLoader from "react-window-infinite-loader";
import { FixedSizeList } from "react-window";

import { InfiniteScrollProps } from "./infinite-scroll-types";

export function InfiniteScroll<TYPE>({
  hasNextPage,
  items,
  loadNextPage,
  renderItem,
  renderLoader,
  scrollHeight,
  itemHeight,
}: InfiniteScrollProps<TYPE>) {
  const isItemLoaded = (index: number) => !hasNextPage || index < items.length;
  const itemCount = hasNextPage ? items.length + 1 : items.length;

  const Item = ({ index, style }: { index: number; style: CSSProperties }) => {
    let content;
    if (!isItemLoaded(index)) {
      content = renderLoader();
    } else {
      content = renderItem(items[index]);
    }

    return <div style={style}>{content}</div>;
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
