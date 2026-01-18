// Función para contactar por WhatsApp con el producto seleccionado
function contactWhatsApp(productName) {
    // Reemplaza este número con tu número de WhatsApp (formato: código de país + número sin espacios ni símbolos)
    // Ejemplo: 5491123456789 (Argentina) o 521234567890 (México)
    const phoneNumber = '542974278736'; // CAMBIAR POR TU NÚMERO
    
    // Mensaje predefinido
    const message = encodeURIComponent(`Hola! Me interesa  ${productName}. ¿Podrías decirme si tenes disponible?`);
    
    // Crear enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
}

// Actualizar enlaces de WhatsApp en el header y footer
document.addEventListener('DOMContentLoaded', function() {
    const phoneNumber = '542974278736'; // CAMBIAR POR TU NÚMERO
    const defaultMessage = encodeURIComponent('Hola! Me gustaría obtener más información sobre tus productos.');
    
    // Actualizar enlace del header
    const headerWhatsApp = document.getElementById('whatsappLink');
    if (headerWhatsApp) {
        headerWhatsApp.href = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
    }
    
    // Actualizar enlaces del footer
    const footerWhatsAppLinks = document.querySelectorAll('.footer-social .whatsapp-link');
    footerWhatsAppLinks.forEach(link => {
        link.href = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
    });
});
