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
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc0ODExNTYsImV4cCI6MTY3NzQ4NDc1Nn0.5mPheTJ5Dw0Uq1_0YY1hId64fyOUX_bxycDlx6nxi2o",
    } || {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc0ODExNTYsImV4cCI6MTY3NzQ4NDc1Nn0.5mPheTJ5Dw0Uq1_0YY1hId64fyOUX_bxycDlx6nxi2o",
    },
    data: data || {},
  };
};
