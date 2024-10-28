export const LocalStorage = () => {
   const save = (key: string, value: string) => {
      try {
         localStorage.setItem(key, value);
      } catch (e) {
         console.error(e);
      }
   }

   const getItem = (key: string) => {
      return localStorage.getItem(key);
   }

   const remove = (key: string) => {
      localStorage.removeItem(key);
   }

   return {
      save,
      getItem,
      remove
   }
}
