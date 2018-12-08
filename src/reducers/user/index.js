export default (state = null, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const getFirstname = ({ user: { firstname } }) => firstname;
