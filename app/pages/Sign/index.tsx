import React from 'react'
import { FC } from 'react';
import Link from 'next/link';
const Sign: FC = () => {
  return (
    <div>
        <Link href="/">
      <a style={{ color: 'blue', textDecoration: 'underline' }}>返回介紹頁面</a>
    </Link>
    </div>
  )
}

export default Sign