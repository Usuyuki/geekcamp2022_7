export const validate = (value: string): string => {
  if (value.length == 0) {
    return "内容を教えてくださいまし";
  }
  if (value.length < 20) {
    return "もう少し詳しく教えてくださいまし";
  }
  return "ご入力ありがとうございます";
};
