import { uploadImage } from './utils/cloudinary.js';
import path from 'path';
import fs from 'fs';

/**
 * USAGE: node uploadHelper.js "C:\path\to\your\image.jpg"
 */

const imagePath = process.argv[2];

if (!imagePath) {
    console.error('Please provide a file path! Example: node uploadHelper.js "C:\\Users\\name\\image.jpg"');
    process.exit(1);
}

const fullPath = path.resolve(imagePath);

if (!fs.existsSync(fullPath)) {
    console.error(`File not found at: ${fullPath}`);
    process.exit(1);
}

async function uploadFile() {
    try {
        console.log(`Uploading ${fullPath} to Cloudinary...`);
        const result = await uploadImage(fullPath, 'travelxplorer/places');

        console.log('\n--- UPLOAD SUCCESSFUL ---');
        console.log('Copy this into your seedKakinada.js "images" array:');
        console.log(JSON.stringify(result, null, 2));
        console.log('-------------------------\n');

        process.exit(0);
    } catch (error) {
        console.error('Upload failed:', error.message);
        process.exit(1);
    }
}

uploadFile();
