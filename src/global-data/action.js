export const type = {
  id: 'id',
  token: 'token',
  language: 'language'
};

export const creator = (type, value = undefined) => {
  return {
    type,
    value
  };
};
