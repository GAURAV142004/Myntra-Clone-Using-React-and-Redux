import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../../store/itemsSlice";
import { FetchStatusSliceAction } from "../../store/FetchStatusSlice";

const Fetchitems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(FetchStatusSliceAction.MarkFetchingStarted());
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(FetchStatusSliceAction.MarkFetchDone());
        dispatch(FetchStatusSliceAction.MarkFetchingFinished());
        dispatch(itemsAction.addInitialItems(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default Fetchitems;
