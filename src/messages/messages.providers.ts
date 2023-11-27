import { DataSource } from 'typeorm';
import { Messages } from './messages.entity';

export const messageProviders = [
    {
        provide: 'MESSAGES_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Messages),
        inject: ['DATA_SOURCE'],
    },
];