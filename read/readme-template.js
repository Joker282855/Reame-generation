function readMaker(info) {
    return `
    
    # ${info.title}
    # Description
    ${info.how}
    ${info.motivation}
    ${info.interest}
    # Table of Contents
    `
}

module.exports = readMaker;