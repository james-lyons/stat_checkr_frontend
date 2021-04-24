import { useMediaQuery } from 'react-responsive';

export const getScreenSize = () => {
   const lgScreen = useMediaQuery({ minWidth: 1440 });
   const medScreen = useMediaQuery({ minWidth: 800 });

   if (lgScreen) {
      return 'large';
   };

   if (medScreen) {
      return 'medium';
   };

   return 'mobile';
};
