import { useEffect } from 'react';

export const usePhoneCombine = () => {
    const combineParentWindow = (e: MessageEvent) => {
        if (e.data === 'phone-load') {
            window = window as any
            const parent = window.parent as any
            (window as any).OpenSelector = parent.OpenSelector;
            (window as any).OpenSelectorAsync = parent.OpenSelectorAsync;
            (window as any).PromptModal = parent.PromptModal;
            (window as any).PromptModalAsync = parent.PromptModalAsync;
            (window as any).OpenSelectCamItem = parent.OpenSelectCamItem;
            (window as any).OpenSelectPhotoMenu = parent.OpenSelectPhotoMenu;
            (window as any).OpenImage = parent.OpenImage;
            (window as any).SendPhoneNotification = parent.SendPhoneNotification;
            (window as any).SendPhoneNotificationOld = parent.SendPhoneNotificationOld;
            (window as any).OpenSelectGifMenu = parent.OpenSelectGifMenu;
            (window as any).OpenRequestMoneyModel = parent.openRequestMoneyModal;
            (window as any).Rotate = parent.Rotate;
            (window as any).SetupCall = parent.SetupCall;
        }
    }

    useEffect(() => {
        window.addEventListener('message', (event) => combineParentWindow(event));

        return () => {
            window.removeEventListener('message', (event) => combineParentWindow(event));
        }
    }, []);
};
