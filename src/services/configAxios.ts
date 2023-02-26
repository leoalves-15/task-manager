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
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc0NDQyNTgsImV4cCI6MTY3NzQ0Nzg1OH0.ljxfHT19VGFe9z2dQbLQotTNgkviGhwxSotoawfMCVM",
    } || {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Nzc0NDQyNTgsImV4cCI6MTY3NzQ0Nzg1OH0.ljxfHT19VGFe9z2dQbLQotTNgkviGhwxSotoawfMCVM",
    },
    data: data || {},
  };
};
