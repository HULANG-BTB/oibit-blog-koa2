export default {
  /**
   * Signature algorithm. Could be one of these values :
   * - HS256:    HMAC using SHA-256 hash algorithm (default)
   * - HS384:    HMAC using SHA-384 hash algorithm
   * - HS512:    HMAC using SHA-512 hash algorithm
   * - RS256:    RSASSA using SHA-256 hash algorithm
   * - RS384:    RSASSA using SHA-384 hash algorithm
   * - RS512:    RSASSA using SHA-512 hash algorithm
   * - ES256:    ECDSA using P-256 curve and SHA-256 hash algorithm
   * - ES384:    ECDSA using P-384 curve and SHA-384 hash algorithm
   * - ES512:    ECDSA using P-521 curve and SHA-512 hash algorithm
   * - none:     No digital signature or MAC value included
   */
  algorithm: 'RS512',
  expires: 30 * 24 * 60 * 60,
  passphrase: 'zxcvbnm',
  priviteKey:
    '-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEA3FlUgTMajQXfOq6D5RaUQFgY25lzYuR3ciOPG/oCHCj/dy8t\nNC+gHax2QcqWH3CalQwXygIfdInJkyyUgVdBMLIXa4QKdyV3+2AxSHrKBrGPJVDi\nsViP+/jIyEOWpyL/oSRYnbkDuDDgEG2Jx+WfcOBnk3vjoSTKg/h5BxqbTjjiRstC\nWptsmickROi/91j+ajaHW3Nc82tNvM5zXINfdnsAHwxtTdquZ6vlhv36AvFbTlUX\no9+drS+4QrR5i/gfprDEfzImX+JpHOFcsBbu/wNy1X0/IL+h9uz+ejhBZ94HHQ0a\nrxPZXPXqHs9i5GxNd77byxkeIGbrXVgaUs7ImQIDAQABAoIBABytH3tE/FKYDgok\nBhQ9UQPiszF5EfQvyX+4MvqwGbAygbSwFhDxlcPm2ukLBWiIDgYRsdLfXdqbx/j4\nV0dR5LECrFuYrof8/1VemmtVV49xcjCoCyiLXwmqwe6WJTgRLPV6tnGoT1ycN7zL\nlJ/IOWzGN5SRDfm9wQFVx+JtywJt1NiQvr8wwRiS21fEsCFHRFAYqBnNBUlsznSl\nWN90rtYI3g+ozRunyVW24UmvBNByaPhJ/tHPQKCK+RQAvk9FyaxFsAvownRbTqfq\nEaWj7Ll8QsjReKO10yI+DwvbZcP+QKFhD8yAB8L8vr+Rmm7TrtVHT0JMfXzq3Fer\nOiw4AhECgYEA+U3FAD7Hh6/PoZVbA6fMtuWeR2lePGa8YSYQ/jQFp6EbBQoANRd8\nZ7uNo278x7ucs0Mj5q1Vksb2lTs8rfSW5SgUBKpm7jULfY10UAR7J5RY8zB2WBxD\n3govUYh0W43w+Qx64JnM2KmgQ2u7BzcNdyntYiO3bdyAI2nsP+p7HrUCgYEA4kR3\nC9Ak7T/yXJPg8N5RjUMxQvakJas0vFc71hVTHiJIanuk2qQjHcbLmJxc2RbhHYCc\n4fgCABmXXbWuiKB4s7lubR8Orsi6EzvXfyg+oXcQD+VAfOh+zTKM88C8rO4+6vU8\njtv7vyWOsCUYzOG+WxeyTaIbP8kwT4OJkrAOzNUCgYBlT/Z0EA80E/1z8+dFyAZI\neW3mJWrXbwS1EiwrseZuZek+Ff9ZlA7JdQ2tUihF3vdiXjGTx/MTr+l7YdRZ+SDt\nRWlFMB6eRU5DGp4e+oM15XJ0echOLEZkUI1EPAjVQAyimTDCX55AmkZ3v6sE1pmR\nSKegj1U2vzoPqjcJDng0VQKBgQCHoAhHgW0Q9LqeeVlkp630Yak+fT5pAdVra1KH\ngWK/9ka35QMstyQBbi6NfHQ+//LRz0y6OgFg8/YCCqviY2XWPLkPGYWgiNrYOo9y\nPbpE6GwtSvo7pNSUxM8uMIInmesGxRaWfw/IRIfh12qlLE8ApRSQajGxKzQVBUBK\nN9O3PQKBgHf/4qLOVMk854nEPWFbaRjla7PqIpklRt0oS3IGM0S2KZWwh+ssnBpD\nrYKNvu0q7n4STUtIf00mtiXuRU1b6w6ierSz/c8MGZLeA1DSAvi/s6fBzIKbeDwc\nH0o1k642LtYH/DxiTLq6ybhYsr4lX+6v90uiMsVyBO1eOX7p8JFe\n-----END RSA PRIVATE KEY-----\n',
  publickKey:
    '-----BEGIN RSA PUBLIC KEY-----\nMIIBCgKCAQEA3FlUgTMajQXfOq6D5RaUQFgY25lzYuR3ciOPG/oCHCj/dy8tNC+g\nHax2QcqWH3CalQwXygIfdInJkyyUgVdBMLIXa4QKdyV3+2AxSHrKBrGPJVDisViP\n+/jIyEOWpyL/oSRYnbkDuDDgEG2Jx+WfcOBnk3vjoSTKg/h5BxqbTjjiRstCWpts\nmickROi/91j+ajaHW3Nc82tNvM5zXINfdnsAHwxtTdquZ6vlhv36AvFbTlUXo9+d\nrS+4QrR5i/gfprDEfzImX+JpHOFcsBbu/wNy1X0/IL+h9uz+ejhBZ94HHQ0arxPZ\nXPXqHs9i5GxNd77byxkeIGbrXVgaUs7ImQIDAQAB\n-----END RSA PUBLIC KEY-----\n'
}
