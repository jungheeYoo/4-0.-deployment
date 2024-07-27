// // 2-2
// // 네비게이션 바 구현
// // Not Found Routes
// // not-found.tsx
// // usePathname
// // layout 개념, layout 파일이 필요한 이유

// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// export default function Navigation() {
//   const path = usePathname();
//   console.log(path);

//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link href="/">Home</Link> {path === '/' ? '🔥' : ''}
//         </li>
//         <li>
//           <Link href="/about-us">About Us</Link>{' '}
//           {path === '/about-us' ? '🔥' : ''}
//         </li>
//       </ul>
//     </nav>
//   );
// }

// ----------------------------------------------------------------

// // 2-3
// // client/sever component
// // SSR vs CSR

// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// export default function Navigation() {
//   const path = usePathname();
//   console.log(path);

//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link href="/">Home</Link> {path === '/' ? '🔥' : ''}
//         </li>
//         <li>
//           <Link href="/about-us">About Us</Link>{' '}
//           {path === '/about-us' ? '🔥' : ''}
//         </li>
//       </ul>
//     </nav>
//   );
// }

// // ----------------------------------------------------------------
// // 2-4
// // Hydration

// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useState } from 'react';

// export default function Navigation() {
//   const path = usePathname();
//   const [count, setCount] = useState(0);
//   console.log(path);

//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link href="/">Home</Link> {path === '/' ? '🔥' : ''}
//         </li>
//         <li>
//           <Link href="/about-us">About Us</Link>{' '}
//           {path === '/about-us' ? '🔥' : ''}
//         </li>
//         <li>
//           <button onClick={() => setCount((c) => c + 1)}>{count}</button>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// // ----------------------------------------------------------------
// // 2-7
// // Layouts

// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useState } from 'react';

// export default function Navigation() {
//   const path = usePathname();
//   const [count, setCount] = useState(0);
//   console.log(path);

//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link href="/">Home</Link> {path === '/' ? '🔥' : ''}
//         </li>
//         <li>
//           <Link href="/about-us">About Us</Link>{' '}
//           {path === '/about-us' ? '🔥' : ''}
//         </li>
//       </ul>
//     </nav>
//   );
// }

// // ----------------------------------------------------------------
// // 4-1
// // CSS Modules

// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import styles from '../styles/navigation.module.css';

// export default function Navigation() {
//   const path = usePathname();
//   return (
//     <nav className={styles.nav}>
//       <ul className={styles.list}>
//         <li>
//           <Link href="/">Home</Link> {path === '/' ? '🔥' : ''}
//         </li>
//         <li>
//           <Link href="/about-us">About Us</Link>
//           {path === '/about-us' ? '🔥' : ''}
//         </li>
//       </ul>
//     </nav>
//   );
// }

// ----------------------------------------------------------------
// 4-2
// Movie Styles
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/navigation.module.css';

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === '/' ? '🔥' : ''}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path === '/about-us' ? '🔥' : ''}
        </li>
      </ul>
    </nav>
  );
}
