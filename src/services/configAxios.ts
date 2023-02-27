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
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc1MTUxMzQsImV4cCI6MTY3NzUxODczNH0.YQH9n67L1XUiRE9MKpaGQHnGJJS9jWybt_HaBgSiPzk",
    } || {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc1MTUxMzQsImV4cCI6MTY3NzUxODczNH0.YQH9n67L1XUiRE9MKpaGQHnGJJS9jWybt_HaBgSiPzk",
    },
    data: data || {},
  };
};
