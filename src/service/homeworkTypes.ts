// Homework Types
export interface IHomeworkGet {
    payload: {};
    response: {
        _id: string;
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
        dateEnd: string;
        dateStart: string;
        flashIn?: number;
        flashOut?: number;
        gameCategory: GameCategory;
        gameDigits: number;
        gameRounds: number;
        gameType: GameType;
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
    ['5S_ADD'] = 'Small Friends Addition',
    ['5S_SUB'] = 'Small Friends Subtraction',
    ['10S_ADD'] = 'Big Friends Addition',
    ['10S_SUB'] = 'Big Friends Subtraction',
}

export enum GameStatus {
    Completed = 'completed',
    Pending = 'pending',
}
