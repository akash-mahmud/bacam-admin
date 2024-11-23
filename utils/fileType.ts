const getFileType = (fileUrl: String) => {
	const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp'];
	const videoExtensions = ['mp4', 'mov', 'avi', 'mkv', 'webm', 'ogg'];
	// Extract the file extension from the URL
	const fileExtension = fileUrl.split('.').pop()?.toLowerCase() ?? '';

	// Determine the media type
	const isImage = imageExtensions.includes(fileExtension);
	const isVideo = videoExtensions.includes(fileExtension);
	return isImage ? 'image' : isVideo ? 'video' : 'unknown';
};
export { getFileType };
