const MY_GOOGLE_API_KEY = "AIzaSyCSJtS8KS3dCBFVHLjIAHFMm9yfwVXgdQg";
export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${MY_GOOGLE_API_KEY}`;
export const YOUTUBE_SEARCH_API ="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const OFFSET_LIVE_CHART = 13;