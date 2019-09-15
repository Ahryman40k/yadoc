
export interface ICommand {
    execute ( ...args: any[] ): void;

    rollback (): void;
} 