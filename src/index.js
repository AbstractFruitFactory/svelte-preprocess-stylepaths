import fs from 'fs'
import path from 'path'

export default ({ content, attributes, filename }) => {
    if (!attributes.src) return

    let stylesPath

    if (path.isAbsolute(attributes.src)) {
        stylesPath = `${path.dirname(require.main.filename)}/../../../..${attributes.src}`
    } else {
        const normalized = path.normalize(attributes.src)
        const pathArray = filename.split('/')
        pathArray.pop()
        pathArray.push(normalized)
        stylesPath = pathArray.join('/')
    }

    const newContent = fs.readFileSync(stylesPath).toString()

    return {
        code: newContent + content
    }
}