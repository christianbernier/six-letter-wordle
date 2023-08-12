import { useEffect } from 'react';

export const useKeyboard = (
  cb: (key: string) => void,
  keyPredicate: (key: string) => boolean
) => {
  const handleKeyDown = (keyboardEvent: KeyboardEvent) => {
    const key = keyboardEvent.key.toUpperCase();

    // If the user is performing an action like refreshing the
    // page, that key input should be ignored.
    if (keyboardEvent.metaKey) {
      return;
    }

    if (keyPredicate(key)) {
      keyboardEvent.preventDefault();
      cb(key);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
};
