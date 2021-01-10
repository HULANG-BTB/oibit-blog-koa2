import fs, { mkdir } from 'fs'
import path from 'path'

/**
 * 递归创建目录
 *
 * @param {string} dir
 * @return {undefine || string}
 */
const mkdirs = dir => {
  return fs.mkdirSync(dir, { recursive: true })
}

const move = (src, dest) => {
  if (!isReadable(src)) {
    return false
  }
  const dirname = path.dirname(dest)
  mkdirs(dirname)
  if (!isWriteable(dirname)) {
    return false
  }
  try {
    fs.copyFileSync(src, dest, fs.constants.COPYFILE_EXC)
    return true
  } catch {
    return false
  } finally {
    fs.unlinkSync(src)
  }
}

const relative = path.relative

const extname = filename => {
  return path.extname(filename)
}

const resolve = path.resolve

const access = dir => {
  return fs.accessSync(dir, fs.constants.R_OK | fs.constants.W_OK)
}

const isReadable = dir => {
  try {
    fs.accessSync(dir, fs.constants.R_OK)
    return true
  } catch {
    return false
  }
}

const isWriteable = dir => {
  try {
    fs.accessSync(dir, fs.constants.W_OK)
    return true
  } catch {
    return false
  }
}

export default {
  mkdirs,
  access,
  move,
  resolve,
  extname,
  relative
}
