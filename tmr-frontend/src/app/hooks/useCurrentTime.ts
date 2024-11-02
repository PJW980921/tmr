import { useState, useEffect, useCallback } from 'react';

interface TimeFormatOptions {
  showSeconds?: boolean;
}

export const useCurrentTime = (
  options: TimeFormatOptions = { showSeconds: false }
) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(
      () => {
        setCurrentTime(new Date());
      },
      options.showSeconds ? 1000 : 60000
    ); // 초 단위 표시가 필요없다면 1분마다 업데이트

    return () => clearInterval(timer);
  }, [options.showSeconds]);

  const formatDate = useCallback((date: Date): string => {
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }, []);

  const formatTime = useCallback(
    (date: Date): string => {
      return date.toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
        ...(options.showSeconds && { second: '2-digit' }),
      });
    },
    [options.showSeconds]
  );

  return {
    currentTime,
    formatDate,
    formatTime,
  };
};
