export const config = (
  method: string,
  endpoint: string,
  header?: object,
  data?: object
) => {
  return {
    method: method,
    url: `${process.env.REACT_APP_BASE_URL_API}${endpoint}`,
    headers: {
      ...header,
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc1MTg4OTQsImV4cCI6MTY3NzUyMjQ5NH0.Mt5OYMnAqUumpaues1Z9DPgc2SCmMQjHgryIYow5Nfk",
    } || {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc1MTg4OTQsImV4cCI6MTY3NzUyMjQ5NH0.Mt5OYMnAqUumpaues1Z9DPgc2SCmMQjHgryIYow5Nfk",
    },
    data: data || {},
  };
};
