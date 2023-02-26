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
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc0MzAwMzYsImV4cCI6MTY3NzQzMzYzNn0.sRSLCxRTaMNsW8NEmbG8WmI2-rZwl6ey-PCb60SkxC0",
    } || {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc0MzAwMzYsImV4cCI6MTY3NzQzMzYzNn0.sRSLCxRTaMNsW8NEmbG8WmI2-rZwl6ey-PCb60SkxC0",
    },
    data: data || {},
  };
};
