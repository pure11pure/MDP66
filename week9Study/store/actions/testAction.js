export const INC_COUNTER = "INC_COUNTER";

export const increaseCounter = (name) => {
  return { type: INC_COUNTER, myname: name };
};
