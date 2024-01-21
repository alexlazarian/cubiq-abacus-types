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
        groupId: string;
        startDate: Date | string;
        endDate: Date | string;
        gameSettings: {
            mode: 'column' | 'flash';
            category: 'addition' | 'subtraction' | 'multiplication' | 'division';
            rounds: number;
            chain: number;
            flashIn: number;
            flashOut: number;
        };
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
