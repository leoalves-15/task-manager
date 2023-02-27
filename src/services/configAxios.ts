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
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc1MDQzMzEsImV4cCI6MTY3NzUwNzkzMX0.EQpUNmWs-Q8vhMvyxP--AJEwDWSdYJy-jJLPTJqoSv4",
    } || {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc1MDQzMzEsImV4cCI6MTY3NzUwNzkzMX0.EQpUNmWs-Q8vhMvyxP--AJEwDWSdYJy-jJLPTJqoSv4",
    },
    data: data || {},
  };
};
