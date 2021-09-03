module.exports = readmeData => {
    console.log(readmeData);

    return `
        'Title: ${readmeData.title}
        Table of Contents: ${readmeData.about}
    `;
};