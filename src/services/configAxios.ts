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
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc1MjgyNDQsImV4cCI6MTY3NzUzMTg0NH0.x-x-QmAH_U9I5XQywDj6hOOscNyOh1AIi3l2_cL8UYs",
    } || {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc1MjgyNDQsImV4cCI6MTY3NzUzMTg0NH0.x-x-QmAH_U9I5XQywDj6hOOscNyOh1AIi3l2_cL8UYs",
    },
    data: data || {},
  };
};
