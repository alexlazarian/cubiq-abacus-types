// Homework Types
export interface IHomeworkGet {
    payload: {};
    response: {
        id: string;
        groupObjectId: {
            groupName: string;
            groupId: string;
        };
        startDate: Date | string;
        endDate: Date | string;
        createdOn: Date | string;
        reviewed: boolean;
        gameSettings: {
            mode: 'column' | 'flash';
            category: 'addition' | 'subtraction' | 'multiplication' | 'division';
            rounds: number;
            chain: number;
            flashIn: number;
            flashOut: number;
        };
    };
}

export interface IHomeworkPost {
    payload: {
        assignTo: string;
        startDate: string;
        endDate: string;
        gameType: GameType;
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
