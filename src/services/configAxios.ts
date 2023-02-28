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
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc1NDk4MDQsImV4cCI6MTY3NzU1MzQwNH0.ivhyatTIy0C8nvmxhN7bcMg89ECq7ZSeF6nO00wjRTk",
    } || {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc1NDk4MDQsImV4cCI6MTY3NzU1MzQwNH0.ivhyatTIy0C8nvmxhN7bcMg89ECq7ZSeF6nO00wjRTk",
    },
    data: data || {},
  };
};
