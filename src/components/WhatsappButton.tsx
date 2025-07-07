export default function WhatsappButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const message = "¡Hola! Me gustaría obtener más información sobre sus servicios.";
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "56936629914";
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <a
      href="https://wa.me/56936629914" // solo por fallback
      onClick={handleClick}
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-2xl hover:shadow-green-400 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 animate-pulse"
      aria-label="Contactar por WhatsApp"
    >
      <img src="/wasap_icon.png" alt="WhatsApp" width={28} height={28} />
    </a>
  );
}
