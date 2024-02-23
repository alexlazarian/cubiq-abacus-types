// Group Types

import { GameStatus, IHomeworkGet } from './homeworkTypes';

export interface IAssignmentGet {
    payload: {};
    response: {
        bank: { question: string; correctAnswer: number; userAnswer: number; _id: string }[];
        createdOn: Date;
        endOn: Date;
        homeworkObjectId: Omit<IHomeworkGet['response'], 'assignmentIds' | 'groupObjectId'>;
        startOn: Date;
        status: GameStatus;
        completedOn: Date;
        completedTime: number;
        _id: string;
    };
}
