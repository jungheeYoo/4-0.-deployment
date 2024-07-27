// import Navigation from '../components/navigation';

// export default function NotFound() {
//   return (
//     <div>
//       <Navigation />
//       <h1>Not found!</h1>
//     </div>
//   );
// }

// // 존재하지 않는 페이지에 화면 표시해줌

// // ----------------------------------------------
// // 2-7
// // Layouts

// export default function NotFound() {
//   return (
//     <div>
//       <h1>Not found!</h1>
//     </div>
//   );
// }

//----------------------------------------------------
// 2-8
// route groups
// metadata object

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not found',
};

export default function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
    </div>
  );
}
