export default {
  dictionaries: ["typescript", "node", "en-gb"],
  ignorePaths: [".git", ".*ignore", "*.yaml"],
  words: ["conneg"],
  ignoreRegExpList: [
    /(Dependencies|dependencies|scripts)": \{.*?\}/gs,
    String.raw`/href\s*=\s*("|')[^"'\s>]*\1/g`,
    String.raw`(https?|ftp)://[^\s]+/g`,
  ],
};
