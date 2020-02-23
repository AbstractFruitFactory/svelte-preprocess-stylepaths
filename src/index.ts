const fs = require('fs')
import path from 'path'

export default ({ content, attributes, filename }) => {
    if (!attributes.src) return

    let stylesPath: string

    if (path.isAbsolute(attributes.src)) {
        stylesPath = `${path.dirname(require.main.filename)}/../../../..${attributes.src}`
    } else {
        const normalized = path.normalize(attributes.src)
        const pathArray: Array<string> = filename.split('/')
        pathArray.pop()
        pathArray.push(normalized)
        stylesPath = pathArray.join('/')
    }

    const newContent = fs.readFileSync(stylesPath).toString()

    return {
        code: newContent + content
    }
}