//SubReddit URL
const baseUrl = "https://www.reddit.com/";

//API URLs
export const subredditUrl = () => `${baseUrl}subreddits.json`;
export const initialPostsUrl = () => `${baseUrl}hot/.json`;
export const chosenPostsUrl = (option) => `${baseUrl}${option}.json`;
