// export default defineEventHandler(async (event) => {
//     const config = useRuntimeConfig();
//
//     if (event.req.method === "POST") {
//         const TELEGRAM_TOKEN = config.private.telegramToken;
//         const TELEGRAM_CHAT_ID = config.private.telegramChatId.split(", ");
//
//         const body = await readBody(event);
//
//         return Promise.all(
//             TELEGRAM_CHAT_ID.map(async (userId) => {
//                 return $fetch(
//                     `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${userId}&text=${encodeURIComponent(
//                         body
//                     )}&parse_mode=HTML`,
//                     {
//                         method: "POST",
//                     }
//                 );
//             })
//         );
//     }
// });
