const fs = require('fs');
const path = require('path');

// Path to the build directory
const buildDir = path.join(__dirname, 'build', 'static');

// Rename JS files
const renameFiles = (dir, fileType) => {
    const folder = path.join(buildDir, dir);

    // Read the directory for files
    fs.readdir(folder, (err, files) => {
        if (err) {
            console.error(`Error reading ${dir} directory:`, err);
            return;
        }

        files.forEach((file) => {
            // Match the file name pattern with the hash
            const regex = new RegExp(`(.+)\\.[a-f0-9]{8}\\.${fileType}$`);

            if (regex.test(file)) {
                const newFileName = file.replace(/\.[a-f0-9]{8}/, '');

                // Rename the file
                fs.rename(path.join(folder, file), path.join(folder, newFileName), (err) => {
                    if (err) {
                        console.error(`Error renaming file ${file}:`, err);
                    } else {
                        console.log(`Renamed ${file} to ${newFileName}`);
                    }
                });
            }
        });
    });
};

// Rename JS and CSS files
renameFiles('js', 'js');
//renameFiles('css', 'css');
