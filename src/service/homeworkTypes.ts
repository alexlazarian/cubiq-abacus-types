import { IGroupGet } from './groupTypes';

// Homework Types
export interface IHomeworkGet {
    payload: {};
    response: {
        _id: string;
        assignmentIds: IHomeworkAssignment[];
        groupObjectId: Pick<IGroupGet['response'], 'groupId' | 'groupName'>;
        dateStart: Date | string;
        dateEnd: Date | string;
        dateCreated: Date | string;
        reviewed: boolean;
        gameSettings: {
            mode: GameType;
            category: GameCategory;
            rounds: number;
            chain: number;
            flashIn: number | null;
        };
    };
}

export interface IHomeworkPost {
    payload: {
        assignTo: string;
        dateEnd: string;
        dateStart: string;
        flashIn?: number;
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

export interface IHomeworkPut {
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
    ['MIX_ADD'] = 'Mix Addition',
    ['MIX_SUB'] = 'Mix Subtraction',
    ['DIRECT_ADD'] = 'Direct Addition',
    ['DIRECT_SUB'] = 'Direct Subtraction',
}

export enum GameStatus {
    Completed = 'completed',
    Pending = 'pending',
    Failed = 'failed',
}

export enum HomeworkStatus {
    Reviewed = 'Reviewed',
    NeedsReview = 'Needs Review',
    InProgress = 'In Progress',
    NotStarted = 'Not Started',
}

interface IHomeworkAssignment {
    bank: {
        question: string;
        correctAnswer: number;
        userAnswer: number | null;
        _id: string;
    }[];
    completedOn: Date | null;
    completedTime: number | null;
    createdOn: Date;
    endOn: Date;
    homeworkObjectId: string;
    startOn: Date;
    status: GameStatus;
    studentObjectId: {
        avatar: string;
        name: string;
        email: string;
    };
}
