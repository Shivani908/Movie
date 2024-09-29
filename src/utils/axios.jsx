import axios from 'axios';

const instance = axios.create({
baseURL : "https://api.themoviedb.org/3/",

headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTQ4YTRhZWYyNDE0ZWI1ZWUyYjNhNTI5N2JiYjNhOCIsIm5iZiI6MTcyNTYwNjI2NC44MjE4NjcsInN1YiI6IjY2ZGFhMzlmNGEwODA4ZGE3YTVkZGY0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a1FvGvT_Z679zJQRnM6CrJ4QghBCqUfTOGbyLpLJobA'
  }

})
export default instance;