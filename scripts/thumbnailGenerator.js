const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

// Define paths
const sourcePath = path.join(__dirname, '..', 'public', 'images')
const thumbPath = path.join(__dirname, '..', 'public', 'images', 'thumbnails')

// Create thumbnails directory if it doesn't exist
if (!fs.existsSync(thumbPath)) {
  fs.mkdirSync(thumbPath, { recursive: true })
}

// Get all jpg files from source directory
const imageFiles = fs.readdirSync(sourcePath).filter((file) => file.endsWith('.jpg'))

// Process each image
async function createThumbnails() {
  console.log(`Found ${imageFiles.length} images to process`)

  for (const file of imageFiles) {
    const imagePath = path.join(sourcePath, file)
    const thumbName = file.replace('.jpg', '_thumb.jpg')
    const thumbFilePath = path.join(thumbPath, thumbName)

    try {
      // Create a thumbnail that's 10% of the original size but at least 300px wide
      await sharp(imagePath)
        .resize({ width: 300, withoutEnlargement: true })
        .jpeg({ quality: 60 }) // Lower quality for smaller file size
        .toFile(thumbFilePath)

      console.log(`Created thumbnail: ${thumbName}`)
    } catch (error) {
      console.error(`Error processing ${file}:`, error)
    }
  }

  console.log('Thumbnail generation complete!')
}

createThumbnails()
