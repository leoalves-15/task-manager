export const config = (
  method: string,
  endpoint: string,
  token: string,
  header?: object,
  data?: object
) => {
  return {
    method: method,
    url: `${process.env.REACT_APP_BASE_URL_API}${endpoint}`,
    headers: {
      ...header,
      Authorization: `Bearer ${token}`,
    } || {
      Authorization: `Bearer ${token}`,
    },
    data: data || {},
  };
};
