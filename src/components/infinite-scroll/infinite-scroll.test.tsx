import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import InfiniteScroll from "./infinite-scroll";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <InfiniteScroll
      items={[]}
      hasNextPage={false}
      itemHeight={0}
      loadNextPage={() => Promise.resolve()}
      renderItem={() => null}
      scrollHeight={0}
    />,
    div
  );
});

it("renders all items if enough space", () => {
  render(
    <InfiniteScroll
      items={["1", "2", "3"]}
      hasNextPage={false}
      itemHeight={10}
      loadNextPage={() => Promise.resolve()}
      renderItem={(item) => <div data-testid="item">{item}</div>}
      scrollHeight={3 * 10}
    />
  );
  const renderedItems = screen.getAllByTestId("item");
  for (const item of renderedItems) {
    expect(item).toBeInTheDocument();
  }
});

it("does not load items if there is no next page", () => {
  const mockLoader = jest.fn();
  render(
    <InfiniteScroll
      items={["1"]}
      hasNextPage={false}
      itemHeight={10}
      loadNextPage={mockLoader}
      renderItem={() => null}
      scrollHeight={2 * 10}
    />
  );
  expect(mockLoader.mock.calls.length).toBe(0);
});

it("loads items if there is next page", () => {
  const mockLoader = jest.fn();
  render(
    <InfiniteScroll
      items={["1", "2", "3"]}
      hasNextPage={true}
      itemHeight={10}
      loadNextPage={mockLoader}
      renderItem={() => null}
      scrollHeight={3 * 10}
    />
  );
  expect(mockLoader.mock.calls.length).toBe(1);
});

it("renders only elements that fit on the screen", () => {
  const mockRender = jest.fn();
  const items = new Array(100).fill(null);
  render(
    <InfiniteScroll
      items={items}
      hasNextPage={false}
      itemHeight={10}
      loadNextPage={() => Promise.resolve()}
      renderItem={mockRender}
      scrollHeight={1 * 10}
    />
  );

  /**
   * We cannot test exact number, since library pre-renders unspecified amount of items,
   * so the upper acceptable limit is specified
   */
  expect(mockRender.mock.calls.length).toBeLessThan(10);
});
