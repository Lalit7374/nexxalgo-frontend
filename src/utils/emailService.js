import emailjs from '@emailjs/browser';

/* ===================================================================
   📧 SHARED EMAILJS CONFIG — used by Contact form AND Career form
   ===================================================================
   Update Template ID and Public Key in ONE place here. Both forms
   will pick up the change automatically.

   How to get these values:
   - Go to https://dashboard.emailjs.com/admin/templates → click your
     template → copy the Template ID (e.g. template_abc1234)
   - Go to https://dashboard.emailjs.com/admin/account → API Keys →
     copy your Public Key (e.g. aBc12dEfG34hIjK5L)
   =================================================================== */

export const EMAILJS_CONFIG = {
  primaryServiceId: 'service_z3psual',
  backupServiceId: 'service_8ipeha8',
  templateId: 'template_dgtar8i', // ⚠️ replace with your real template_xxxxxxx
  publicKey: '4Uodp6GZmpAbdH-bO',   // ⚠️ replace with your real public key
};

const isConfigured = () =>
  EMAILJS_CONFIG.templateId !== 'YOUR_TEMPLATE_ID_HERE' &&
  EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY_HERE';

/**
 * Send an email via EmailJS, trying primary service first, then backup.
 * Throws an Error with a useful message if both fail.
 */
export const sendEmailJS = async (templateParams) => {
  if (!isConfigured()) {
    throw new Error(
      'EmailJS not configured. Set templateId & publicKey in src/utils/emailService.js'
    );
  }

  const { primaryServiceId, backupServiceId, templateId, publicKey } =
    EMAILJS_CONFIG;

  try {
    const result = await emailjs.send(
      primaryServiceId,
      templateId,
      templateParams,
      publicKey
    );
    return { success: true, via: 'primary', result };
  } catch (primaryErr) {
    console.warn('Primary EmailJS service failed, trying backup:', primaryErr);
    try {
      const result = await emailjs.send(
        backupServiceId,
        templateId,
        templateParams,
        publicKey
      );
      return { success: true, via: 'backup', result };
    } catch (backupErr) {
      const errorMessage =
        backupErr?.text ||
        primaryErr?.text ||
        backupErr?.message ||
        primaryErr?.message ||
        'Email delivery failed.';
      throw new Error(errorMessage);
    }
  }
};

/**
 * Format a date in IST timezone for the {{time}} variable.
 */
export const getISTTimestamp = () => {
  return new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  });
};
