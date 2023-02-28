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
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc1OTYyMDksImV4cCI6MTY3NzU5OTgwOX0.QMQnfEJ8pTzY3SQmQkt7X77L8bw2E7ilEY4pxy3bN-k",
    } || {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc1OTYyMDksImV4cCI6MTY3NzU5OTgwOX0.QMQnfEJ8pTzY3SQmQkt7X77L8bw2E7ilEY4pxy3bN-k",
    },
    data: data || {},
  };
};
