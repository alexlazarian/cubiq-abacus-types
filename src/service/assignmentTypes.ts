// Group Types

import { GameStatus, IHomeworkGet } from './homeworkTypes';
import { IStudentGet } from './studentTypes';

export interface IAssignmentGet {
    payload: {};
    response: {
        studentObjectId: Pick<IStudentGet['response'], 'name' | 'email' | 'avatar'>;
        bank: { question: string; correctAnswer: number; userAnswer: number | null; _id: string }[];
        createdOn: Date;
        endOn: Date;
        homeworkObjectId: Omit<IHomeworkGet['response'], 'assignmentIds' | 'groupObjectId'>;
        startOn: Date;
        status: GameStatus;
        completedOn: Date | null;
        completedTime: number | null;
        _id: string;
    };
}
