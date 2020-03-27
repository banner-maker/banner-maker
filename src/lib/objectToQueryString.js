/** *
 * object to query string
 * @param object
 * @returns {string}
 * @example
 *  {
 *    k1: 2,
 *    k2: 3
 *  } -> k1=2&k2=3
 */
const objectToQueryString = (obj) => Object.entries(obj)
  .map(([k, v]) => `${k}=${v}`)
  .join('&')

export default objectToQueryString
