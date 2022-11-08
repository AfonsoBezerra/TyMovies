import Admin from 'firebase-admin';
import AdminSDK from './adminSDK.json';

if (!Admin.apps.length) {
  Admin.initializeApp({
    credential: Admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      clientEmail: AdminSDK.client_email,
      privateKey: AdminSDK.private_key,
    }),
  });
}

export const database = Admin.firestore();
