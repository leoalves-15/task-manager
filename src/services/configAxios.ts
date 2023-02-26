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
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc0NDkwMDYsImV4cCI6MTY3NzQ1MjYwNn0.PhWlXq4ssgPFfoqxLASAxdLLTBOg3tkFcBj2aywy4iA",
    } || {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc0NDkwMDYsImV4cCI6MTY3NzQ1MjYwNn0.PhWlXq4ssgPFfoqxLASAxdLLTBOg3tkFcBj2aywy4iA",
    },
    data: data || {},
  };
};
