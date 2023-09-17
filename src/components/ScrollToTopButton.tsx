export default function ScrollToTopButton() {
  function handleOnClick() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <button
      onClick={handleOnClick}
      className="no-underline text-xs font-bold uppercase hover:text-stone-400 dark:hover:text-white"
    >
      Volver al principio
    </button>
  );
}
