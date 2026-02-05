const WHATSAPP_NUMBER = "60146228473";

const defaultMessage = [
  "Hello Mosel,",
  "",
  "I'd like to ask about a website project.",
].join("\n");

export function WhatsAppFab() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl md:bottom-8 md:right-8"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          fill="currentColor"
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.173.198-.298.298-.496.099-.198.05-.372-.025-.521-.075-.148-.67-1.612-.916-2.207-.242-.58-.487-.5-.67-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.264.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.075-.124-.272-.198-.57-.347zM12.004 2.003c-5.523 0-9.999 4.476-9.999 9.999 0 1.763.461 3.485 1.338 4.99L2 22l5.126-1.319a9.95 9.95 0 0 0 4.878 1.254c5.523 0 9.999-4.476 9.999-9.999 0-5.523-4.476-9.999-9.999-9.999zm0 18.197a8.2 8.2 0 0 1-4.184-1.145l-.3-.178-3.04.781.81-2.966-.195-.305a8.186 8.186 0 0 1-1.25-4.352c0-4.536 3.688-8.224 8.224-8.224 4.536 0 8.224 3.688 8.224 8.224 0 4.536-3.688 8.224-8.224 8.224z"
        />
      </svg>
    </a>
  );
}
