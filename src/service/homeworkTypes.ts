// Homework Types
export interface IHomeworkGet {
    payload: {};
    response: {
        id: string;
        assignmentIds: string[];
        groupObjectId: {
            groupName: string;
            groupId: string;
        };
        startDate: Date | string;
        endDate: Date | string;
        createdOn: Date | string;
        reviewed: boolean;
        gameSettings: {
            mode: GameType;
            category: GameCategory;
            rounds: number;
            chain: number;
            flashIn: number | null;
            flashOut: number | null;
        };
    };
}

export interface IHomeworkPost {
    payload: {
        assignTo: string;
        startDate: string;
        endDate: string;
        gameType: GameType;
        category: GameCategory;
        numberOfRounds: number;
        appearInterval?: number;
        disappearInterval?: number;
    };
    response: {
        homework: IHomeworkGet['response'];
    };
}

export interface IHomeworkDelete {
    payload: {
        homeworkId: string;
    };
    response: {
        homework: {
            homeworkId: string;
        };
    };
}

export enum GameType {
    Column = 'Column',
    Flash = 'Flash',
}

export enum GameCategory {
    Addition = 'Addition',
    Subtraction = 'Subtraction',
}

export enum GameStatus {
    Completed = 'completed',
    Pending = 'pending',
}
