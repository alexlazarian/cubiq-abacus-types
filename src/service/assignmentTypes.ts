// Group Types

import { GameCategory, GameStatus, GameType, IHomeworkGet } from './homeworkTypes';
import { IStudentGet } from './studentTypes';

interface IGameSettings {
    mode: GameType;
    category: GameCategory;
    rounds: number;
    chain: number;
    flashIn: null;
}

interface IHomeworkObject {
    gameSettings: IGameSettings;
    _id: string;
    dateStart: string;
    dateEnd: string;
    dateCreated: string;
    reviewed: boolean;
}

interface IBankItem {
    question: string;
    correctAnswer: number;
    userAnswer: null;
    _id: string;
}

export interface IAssignmentGet {
    payload: {};
    response: {
        _id: string;
        homeworkObjectId: IHomeworkObject;
        startOn: Date;
        endOn: Date;
        createdOn: Date;
        bank: IBankItem[];
        status: GameStatus;
        completedOn: Date | null;
        completedTime: number | null;
    };
}

export interface IAssignmentPut {
    payload: {
        assignmentId: string;
        timeMs: number;
        answers: Record<string, number>;
    };
    response: {};
}
