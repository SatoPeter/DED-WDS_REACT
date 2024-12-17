/**
 * 根據指定的字串和計數，獲取縮寫的全名。
 * @param string 要處理的字串
 * @param count 要匹配的大寫字母數量
 * @returns 縮寫的全名
 */
export const getAbbrFullName = (string: string, count: number) => {
  let matchCount = 0;
  let matchString = '';

  string.split('').forEach((char) => {
    if (/^[A-Z]+$/.test(char)) {
      if (matchCount < 2) {
        matchCount++;
        matchString = matchString + char;
      }
    }
  });
  return matchCount < 2 ? string.slice(0, count).toUpperCase() : matchString;
};

export const getCombinedClassName = (prefix: string, suffix: string) => {
  return `${prefix}-${suffix}`;
};
