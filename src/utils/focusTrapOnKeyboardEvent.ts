export function focusTrapOnKeyboardEvent(
  event: React.KeyboardEvent<HTMLElement>,
) {
  if (event.key !== 'Tab') return false;

  const focusableModalElements =
    event.currentTarget.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select',
    ) || [];
  const firstElement = focusableModalElements[0] as HTMLElement;
  const lastElement = focusableModalElements[
    focusableModalElements.length - 1
  ] as HTMLElement;

  if (!event.shiftKey && document.activeElement === lastElement) {
    firstElement.focus();
    return event.preventDefault();
  }
  if (event.shiftKey && document.activeElement === firstElement) {
    lastElement.focus();
    return event.preventDefault();
  }

  return false;
}
