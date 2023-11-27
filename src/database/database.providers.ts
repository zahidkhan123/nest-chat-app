import { devdataSource } from '../config/dev.env';
import { prodDataSource } from '../config/pro.env';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = process.env.NODE_ENV !== "production" ? devdataSource : prodDataSource

            return dataSource.initialize();
        },
    },
];