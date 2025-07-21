import { LuShare } from "react-icons/lu";

export function Share() {
  function copyToClipboard(url: string) {
    navigator.clipboard.writeText(url).then(() => {
      const sharedElement = document.getElementById("shared");
      if (sharedElement) {
        sharedElement.classList.remove("hidden");
        setTimeout(() => {
          sharedElement.classList.add("hidden");
        }, 2000);
      }
    });
  }

  function share() {
    const url = window.location.href;

    if (navigator.share) {
      navigator.share({ url });
    } else {
      copyToClipboard(url);
    }
  }

  return (
    <div className="flex gap-3">
      <button
        onClick={share}
        className="p-2 cursor-pointer hover:text-primary relative"
      >
        <span
          id="shared"
          className="z-40 absolute right-0 -bottom-8 bg-black/75 rounded text-white font-semibold text-xs p-2 hidden transition-all duration-300 ease-in-out"
        >
          Copied
        </span>
        <LuShare className="w-6 h-6" />
      </button>
    </div>
  );
}
