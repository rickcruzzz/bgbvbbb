const WHATSAPP_URL = "https://wa.me/5571988084005?text=Oi%2C+quero+comprar+Mel+Duas+Abelhas.+Vi+no+site+e+gostaria+de+mais+informações+sobre+valores+e+entrega+em+Salvador%2FRMS.";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_-4px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_35px_-4px_rgba(37,211,102,0.6)] active:scale-95 md:h-16 md:w-16"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 md:h-8 md:w-8"
        fill="none"
      >
        <path
          d="M16 4.25c-6.15 0-11.13 4.81-11.13 10.74 0 2.25.72 4.33 1.94 6.05L5.62 26l5.25-1.14a11.37 11.37 0 0 0 5.13 1.22c6.15 0 11.13-4.81 11.13-10.74S22.15 4.25 16 4.25Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.04 11.87c-.21-.47-.43-.48-.62-.49h-.53c-.18 0-.48.07-.73.35s-.96.93-.96 2.27.99 2.63 1.13 2.81c.14.18 1.93 3 4.73 4.1 2.8 1.1 2.8.73 3.3.68.49-.05 1.58-.64 1.8-1.26.22-.62.22-1.15.15-1.26-.07-.11-.26-.18-.54-.32-.27-.14-1.62-.82-1.87-.91-.25-.09-.43-.14-.62.14-.18.28-.7.9-.86 1.08-.15.18-.31.21-.58.07-.27-.14-1.16-.43-2.2-1.39-.81-.75-1.35-1.67-1.51-1.95-.16-.28-.02-.43.12-.57.13-.13.27-.33.4-.49.13-.16.18-.28.27-.46.09-.18.04-.35-.02-.49-.07-.14-.62-1.53-.86-2.08Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}

export { WHATSAPP_URL };
