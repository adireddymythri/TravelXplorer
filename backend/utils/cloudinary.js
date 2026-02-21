import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    timeout: 60000,
});

/**
 * Upload an image to Cloudinary
 * @param {string} filePath - Path to the image file
 * @param {string} folder - Folder name in Cloudinary
 * @returns {Promise<object>} - Cloudinary upload result
 */
export const uploadImage = async (filePath, folder = 'travelxplorer/places') => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder,
            resource_type: 'auto',
            timeout: 60000,
        });
        return {
            url: result.secure_url,
            publicId: result.public_id,
        };
    } catch (error) {
        console.error('Cloudinary Upload Error:', error);
        throw new Error('Image upload failed');
    }
};

/**
 * Upload an image buffer to Cloudinary
 * @param {Buffer} buffer - Image buffer
 * @param {string} folder - Folder name in Cloudinary
 * @returns {Promise<object>}
 */
export const uploadFromBuffer = (buffer, folder = 'travelxplorer/places') => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder, resource_type: 'auto' },
            (error, result) => {
                if (error) {
                    console.error('Cloudinary Buffer Upload Error:', error);
                    reject(new Error('Image buffer upload failed'));
                } else {
                    resolve({
                        url: result.secure_url,
                        publicId: result.public_id,
                    });
                }
            }
        );
        stream.end(buffer);
    });
};

/**
 * Delete an image from Cloudinary
 * @param {string} publicId - Cloudinary Public ID
 * @returns {Promise<object>}
 */
export const deleteImage = async (publicId) => {
    try {
        return await cloudinary.uploader.destroy(publicId);
    } catch (error) {
        console.error('Cloudinary Delete Error:', error);
        throw new Error('Image deletion failed');
    }
};

export default cloudinary;
