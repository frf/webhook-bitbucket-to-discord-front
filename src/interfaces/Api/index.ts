import { IPagination } from '../Pagination';

export default interface IApiResponse<T> {
  data: T;
  meta?: IPagination;
}
