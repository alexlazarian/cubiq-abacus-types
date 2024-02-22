// Group Types

import { GameStatus } from './homeworkTypes';

export interface IAssignmentGet {
    payload: {};
    response: {
        id: string;
        homeworkObjectId: string;
        createdOn: Date;
        startOn: Date;
        endOn: Date;
        bank: { question: string; correctAnswer: number; userAnswer: number }[];
        status: GameStatus;
        completedOn: Date;
        completedTime: number;
    };
}
