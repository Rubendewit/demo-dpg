import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Spinner } from "../Spinner";
import { Wrapper } from "./LoadMore.styled";

type LoadMoreProps = {
  loadMore: () => void;
  loading: boolean;
};

export const LoadMore: FC<LoadMoreProps> = ({ loadMore, loading }) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && !loading) {
      loadMore();
    }
  }, [inView, loadMore, loading]);

  return (
    <Wrapper ref={ref}>
      <Spinner />
    </Wrapper>
  );
};
