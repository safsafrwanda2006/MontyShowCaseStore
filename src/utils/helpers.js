import { APP_CONFIG } from "../config/constants.js";

/**
 * Generate WhatsApp URL with message
 * @param {string} message - The message to send
 * @returns {string} - The WhatsApp URL
 */
export const generateWhatsAppURL = (message = "") => {
  try {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${APP_CONFIG.PHONE_NUMBER}?text=${encodedMessage}`;
  } catch (error) {
    console.error("Error generating WhatsApp URL:", error);
    return `https://wa.me/${APP_CONFIG.PHONE_NUMBER}`;
  }
};

/**
 * Open WhatsApp with a message
 * @param {string} message - The message to send
 */
export const openWhatsApp = (message = APP_CONFIG.WHATSAPP_MESSAGE_PREFIX) => {
  try {
    const url = generateWhatsAppURL(message);
    window.open(url, "_blank");
  } catch (error) {
    console.error("Error opening WhatsApp:", error);
    throw new Error("حدث خطأ في فتح واتساب");
  }
};

/**
 * Scroll to element smoothly
 * @param {string} elementId - The ID of the element to scroll to
 */
export const scrollToElement = (elementId) => {
  try {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return true;
    }
    console.warn(`Element with ID "${elementId}" not found`);
    return false;
  } catch (error) {
    console.error("Error scrolling to element:", error);
    return false;
  }
};

/**
 * Format cart items into readable message
 * @param {Array} cartProducts - Array of cart products
 * @returns {string} - Formatted message
 */
export const formatCartMessage = (cartProducts) => {
  try {
    if (!cartProducts || cartProducts.length === 0) {
      return "";
    }

    const productList = cartProducts
      .map(
        (p, index) =>
          `${index + 1}. ${p.name}
السعر: ${p.price} ج.س
الصورة: ${p.image}`
      )
      .join("\n\n");

    const totalPrice = cartProducts.reduce(
      (sum, p) => sum + parseFloat(p.price || 0),
      0
    );

    return `السلام عليكم ورحمة الله وبركاته

المطلوب من ${APP_CONFIG.BUSINESS_NAME}:

${productList}

الإجمالي: ${totalPrice} ج.س`;
  } catch (error) {
    console.error("Error formatting cart message:", error);
    return "";
  }
};

/**
 * Handle API errors
 * @param {Error} error - The error object
 * @param {string} context - Context where the error occurred
 */
export const handleError = (error, context = "Unknown") => {
  console.error(`Error in ${context}:`, error);

  // Don't show sensitive error details to users
  const userMessage =
    error?.message || `حدث خطأ في ${context}. يرجى المحاولة مرة أخرى.`;
  return userMessage;
};

/**
 * Validate cart products before order
 * @param {Array} cartProducts - Array of cart products
 * @returns {Object} - Validation result
 */
export const validateCart = (cartProducts) => {
  if (!cartProducts || cartProducts.length === 0) {
    return {
      isValid: false,
      message: "السلة فارغة! يرجى إضافة منتجات أولاً",
    };
  }

  // Check if all products have required fields
  const hasInvalidProducts = cartProducts.some((p) => !p.name || !p.price);
  if (hasInvalidProducts) {
    return {
      isValid: false,
      message: "بعض المنتجات في السلة غير كاملة",
    };
  }

  return {
    isValid: true,
    message: "Cart is valid",
  };
};
