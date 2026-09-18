import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'cifra-conseil-site-x44zyglz',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_0zFMdgKwihfbEQzyaZTYpVlaxbHCB-1M',
  authRequired: false,
  auth: { mode: 'managed' },
})
