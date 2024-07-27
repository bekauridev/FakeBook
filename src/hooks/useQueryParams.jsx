import { useSearchParams } from "react-router-dom";

const useQueryParams = (param) => {
  const [searchParams] = useSearchParams();
  return searchParams.get(param);
};

export default useQueryParams;
