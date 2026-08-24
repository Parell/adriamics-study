module.exports = function stripHasOwnOption(source) {
  return source.replace(/\s*polyfillHasOwn:\s*true,\s*/, '\n');
};
