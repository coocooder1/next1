import React from 'react'

import Link from 'next/link';
const Sign = () => {
  return (
    <main>
      <div>
          <Link href="/">
        <a style={{ color: 'blue', textDecoration: 'underline' }}>返回介紹頁面</a>
      </Link>
      </div>
    </main>
  )
}

export default Sign