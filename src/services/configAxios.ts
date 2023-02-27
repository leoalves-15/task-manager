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
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc0NjAyMDksImV4cCI6MTY3NzQ2MzgwOX0.6AWkXMCUUIrFdWT48Rsx5MODp06KBQCcscYyr6cAzhU",
    } || {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc0NjAyMDksImV4cCI6MTY3NzQ2MzgwOX0.6AWkXMCUUIrFdWT48Rsx5MODp06KBQCcscYyr6cAzhU",
    },
    data: data || {},
  };
};
