'use client';

export default function ErrorOMG() {
  return <h1>lol something broke...</h1>;
}

// 파일 이름은 error 로 해아 한다
// error 컴포넌트에는 반드시 use client를 추가해야 한다
//  error 파일을 해당 페이지 옆에 만들고
// 이렇게 하면 페이지에만 에러가 발생한다.
// 나머지 부분은 정상 작동
// 단, 이 에러 파일은 /movies/id 에만 적용된다
// 이 에러 파일은 바로 옆에 있는 페이지에서 발생하는 에러에만 작동
