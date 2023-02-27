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
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc0Nzc1MDMsImV4cCI6MTY3NzQ4MTEwM30.-IqVEOr5uE7EL0g1F2brGqnFcsnyxrtQLdaSdJde-rA",
    } || {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc0Nzc1MDMsImV4cCI6MTY3NzQ4MTEwM30.-IqVEOr5uE7EL0g1F2brGqnFcsnyxrtQLdaSdJde-rA",
    },
    data: data || {},
  };
};
