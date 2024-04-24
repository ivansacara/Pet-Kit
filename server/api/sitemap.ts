// Импортируйте библиотеку axios для выполнения HTTP-запросов
import axios from 'axios';

// Экспортируйте обработчик карты сайта
export default defineSitemapEventHandler(async () => {
    const config = useRuntimeConfig();

    const CONTENTFUL_TOKEN = config.public.NUXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
    const CONTENTFUL_SPACE = config.public.NUXT_PUBLIC_CONTENTFUL_SPACE
    try {
        // Выполните запрос к API Contentful
        const {data} = await axios.get(`https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE}/entries`, {
            headers: {
                Authorization: `Bearer ${CONTENTFUL_TOKEN}`,
            },
        });

        // Извлеките данные о постах из ответа
        const posts = data.items.map((item: any) => ({
            _path: `/product/${item.fields.slug}`, // Предполагается, что вам нужно добавить `/blog/` перед slug
            modifiedAt: new Date(item.sys.updatedAt), // Используйте дату обновления из системных данных Contentful
        }));

        // Преобразуйте данные о постах в формат, подходящий для карты сайта
        const sitemapRoutes = posts.map((post: any) => ({
            loc: post._path,
            lastmod: post.modifiedAt,
        }));

        // Верните массив маршрутов для карты сайта
        return sitemapRoutes;
    } catch (error) {
        console.error('Error fetching Contentful data:', error);
        // В случае ошибки возвращаем пустой массив маршрутов
        return [];
    }
});
