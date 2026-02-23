const fs = require('fs');
const path = require('path');

const toursFilePath = path.join(__dirname, '../src/data/tours.ts');
const imagesDirPath = path.join(__dirname, '../public/images');

let toursContent = fs.readFileSync(toursFilePath, 'utf8');

function formatTitle(filename) {
    let name = path.parse(filename).name;
    // Remove digits at the end
    name = name.replace(/\d+$/, '');
    // Replace dots/hyphens/underscores with spaces
    name = name.replace(/[-_.]/g, ' ');
    // Title case
    name = name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return name.trim();
}

const productIdRegex = /bokunProductId:\s*"(\d+)",\s*slides:\s*\[([\s\S]*?)\]/g;

toursContent = toursContent.replace(productIdRegex, (match, productId, slidesStr) => {
    const dirPath = path.join(imagesDirPath, productId);

    // Some folders might use different names, but according to the list, we have matching folder names.
    // e.g. 1144488 might be misnamed 1144448 in the folder list. We check if the folder exists.
    let folderToUse = productId;
    if (!fs.existsSync(dirPath)) {
        // Fallback check
        const allDirs = fs.readdirSync(imagesDirPath).filter(f => fs.statSync(path.join(imagesDirPath, f)).isDirectory());
        const fuzzyDir = allDirs.find(d => d.startsWith(productId.substring(0, 4)));
        if (!fuzzyDir) {
            console.log(`No directory for product ${productId}, keeping original slides.`);
            return match;
        }
        console.log(`Using directory ${fuzzyDir} for product ${productId}`);
        folderToUse = fuzzyDir;
    }

    const actualDirPath = path.join(imagesDirPath, folderToUse);
    const files = fs.readdirSync(actualDirPath).filter(f => f.endsWith('.webp'));

    if (files.length === 0) {
        console.log(`No webp images found in ${folderToUse}, keeping original slides.`);
        return match;
    }

    const newSlides = files.map(file => {
        const title = formatTitle(file);
        return `                    { image: "/images/${folderToUse}/${file}", title: "${title}" }`;
    }).join(',\n');

    return `bokunProductId: "${productId}",\n                slides: [\n${newSlides}\n                ]`;
});

fs.writeFileSync(toursFilePath, toursContent, 'utf8');
console.log('Updated tours.ts successfully.');
