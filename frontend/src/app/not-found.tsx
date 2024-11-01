'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const [timeCounter, setTimeCounter] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeCounter((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.back();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // cleanup function
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-16">
      <p className="font-bold">
        {`잘못된 경로입니다. ${timeCounter}초 후 이전 페이지로 이동합니다.`}
      </p>
    </main>
  );
}
