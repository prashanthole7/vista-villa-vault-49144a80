import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hi, I'm interested in properties listed on PropIndia. Please share available options."
  );

  return (
    <a
      href={`https://wa.me/918999816425?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
