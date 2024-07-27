// //----------------------------------------------------
// // 3-5
// // Suspense
// // fetch 함수들을 분리하기
// // 이전에는 getMovie와 getVideos 함수가 둘다 끝나야 UI를 볼 수 있었음

// import { API_URL } from '../app/(home)/page';

// async function getVideos(id: string) {
//   console.log(`Fetching videos: ${Date.now()}`);
//   // await new Promise((resolve) => setTimeout(resolve, 3000));
//   const response = await fetch(`${API_URL}/${id}/videos`);
//   return response.json();
// }

// // 이건 videos만을 랜더링하는 component
// export default async function MovieVideos({ id }: { id: string }) {
//   const videos = await getVideos(id);
//   return <h6>{JSON.stringify(videos)}</h6>;
// }

// //----------------------------------------------------
// // 3-7
// // Error Handling
// // 에러 처리

// import { API_URL } from '../app/(home)/page';

// async function getVideos(id: string) {
//   console.log(`Fetching videos: ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   throw new Error('something broke...');
//   // const response = await fetch(`${API_URL}/${id}/videos`);
//   // return response.json();
// }

// // 이건 videos만을 랜더링하는 component
// export default async function MovieVideos({ id }: { id: string }) {
//   const videos = await getVideos(id);
//   return <h6>{JSON.stringify(videos)}</h6>;
// }

//----------------------------------------------------
// 4-3
// Movie Trailers

import { API_URL } from '../app/(home)/page';
import styles from '../styles/movie-videos.module.css';

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

// 이건 videos만을 랜더링하는 component
export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
