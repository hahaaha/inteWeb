let importCode = (name,filePath) => {
    return `import ${name} from '${filePath}'\n`
}

let exportCode = (...value) => {
    return `export { ${value.toString()} } \n`
}

exports.importCode = importCode
exports.exportCode = exportCode

