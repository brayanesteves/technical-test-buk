import { alertController } from '@ionic/core';

export const showAlert = async (message: string) => {
    const alert = await alertController.create({
        header: 'Error',
        message: message,
        buttons: ['OK'],
    });
    await alert.present();
};
