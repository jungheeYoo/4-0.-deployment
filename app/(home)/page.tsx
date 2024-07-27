// import Navigation from '../components/navigation';

// export default function Page() {
//   return (
//     <div>
//       <Navigation />
//       <h1>Hello!</h1>
//     </div>
//   );
// }

// // ----------------------------------------------
// // 2-7
// // Layouts

// export default function Page() {
//   return (
//     <div>
//       <h1>Hello!</h1>
//     </div>
//   );
// }

// //----------------------------------------------------
// // 2-8
// // route groups
// // metadata object

// // layout 파일에서 잘라내서 home 페이지에 여기에 붙여넣음

// export const metadata = {
//   title: 'Home',
// };

// export default function Page() {
//   return (
//     <div>
//       <h1>Hello!</h1>
//     </div>
//   );
// }

// //----------------------------------------------------
// // 3-1
// // client side
// // 외부 라이브러리나 서드파티 없이 data 를 fetch 하는 법
// // React JS 에서 useEffect, useState를 사용하여 data fetch 하는 법

// 'use client';

// import { useEffect, useState } from 'react';

// export default function Page() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const getMovies = async () => {
//     const response = await fetch(
//       'https://nomad-movies.nomadcoders.workers.dev/movies'
//     );
//     const json = await response.json();
//     setMovies(json);
//     setIsLoading(false);
//   };
//   useEffect(() => {
//     getMovies();
//   }, []);
//   return <div>{isLoading ? 'Loading...' : JSON.stringify(movies)}</div>;
// }

// //----------------------------------------------------
// // 3-2
// // server side

// export const metadata = {
//   title: 'Home',
// };

// const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

// async function getMovies() {
//   // console.log('Im fetching!');
//   // 프로그램을 멈춰서 느리게 만드는 간단한 트릭 - 로딩 상태를 보기 위해서
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   // const response = await fetch(URL);
//   // const json = await response.json();
//   // return json;
//   return fetch(URL).then((Response) => Response.json());
// }

// export default async function HomePage() {
//   const movies = await getMovies();
//   return <div>{JSON.stringify(movies)}</div>;
// }

// // fetch 하는 함수 만들기
// // 이 함수는 component 안에 없어도 됨. server component에서는 좀 달라짐
// // 이 함수는 내 url을 fetch할거고 response를 받아서 response.json()을 return
// // 어떤 일이 발생하기를 기다리려고 await를 사용할 때, 부모 함수에 무조건 async가 있어야 함

// //----------------------------------------------------
// // 3-3
// // Loading Components

// export const metadata = {
//   title: 'Home',
// };

// const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

// async function getMovies() {
//   // console.log('Im fetching!');
//   // 프로그램을 멈춰서 느리게 만드는 간단한 트릭 - 로딩 상태를 보기 위해서
//   await new Promise((resolve) => setTimeout(resolve, 10000));
//   // const response = await fetch(URL);
//   // const json = await response.json();
//   // return json;
//   return fetch(URL).then((Response) => Response.json());
// }

// export default async function HomePage() {
//   const movies = await getMovies();
//   return <div>{JSON.stringify(movies)}</div>;
// }

// // 하지만 데이터를 불러오는 데 긴 시간이 걸림.

// // 이 파일 이름이 loading이어야 함
// // 그리고 page 파일 옆에 있어야 함
// // 그럼 loading 파일은 이 page 파일에 대해 작동함
// // 좀 더 정리해야 함

// //----------------------------------------------------
// // 3-4
// // Parallel Requests
// import Link from 'next/link';
// import { resolve } from 'path';

// export const metadata = {
//   title: 'Home',
// };

// export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

// async function getMovies() {
//   // console.log('Im fetching!');
//   // 프로그램을 멈춰서 느리게 만드는 간단한 트릭 - 로딩 상태를 보기 위해서
//   // await new Promise((resolve) => setTimeout(resolve, 1000));
//   // const response = await fetch(URL);
//   // const json = await response.json();
//   // return json;
//   return fetch(API_URL).then((Response) => Response.json());
// }

// export default async function HomePage() {
//   const movies = await getMovies();
//   return (
//     <div>
//       {movies.map((movie) => (
//         <li key={movie.id}>
//           <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
//         </li>
//       ))}
//     </div>
//   );
// }

// // 영화 클릭하면 일어나는 일 구현

// //----------------------------------------------------
// // 4-2
// // Movie Styles
// import Movie from '../../components/movie';
// import styles from '../../styles/home.module.css';

// export const metadata = {
//   title: 'Home',
// };

// export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

// async function getMovies() {
//   // console.log('Im fetching!');
//   // 프로그램을 멈춰서 느리게 만드는 간단한 트릭 - 로딩 상태를 보기 위해서
//   // await new Promise((resolve) => setTimeout(resolve, 1000));
//   // const response = await fetch(URL);
//   // const json = await response.json();
//   // return json;
//   return fetch(API_URL).then((Response) => Response.json());
// }

// export default async function HomePage() {
//   const movies = await getMovies();
//   return (
//     <div className={styles.container}>
//       {movies.map((movie) => (
//         <Movie
//           key={movie.id}
//           id={movie.id}
//           poster_path={movie.poster_path}
//           title={movie.title}
//         />
//       ))}
//     </div>
//   );
// }

//----------------------------------------------------
// 4-4
// Dynamic Metadata
import Movie from '../../components/movie';
import styles from '../../styles/home.module.css';
import { API_URL } from '../contants';

export const metadata = {
  title: 'Home',
};

async function getMovies() {
  // console.log('Im fetching!');
  // 프로그램을 멈춰서 느리게 만드는 간단한 트릭 - 로딩 상태를 보기 위해서
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
