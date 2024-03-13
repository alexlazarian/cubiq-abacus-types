// Group Types

import { GameStatus, IHomeworkGet } from './homeworkTypes';
import { IStudentGet } from './studentTypes';

interface IGameSettings {
    mode: string;
    category: string;
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
        startOn: string;
        endOn: string;
        createdOn: string;
        bank: IBankItem[];
        status: string;
    };
}

export interface IAssignmentPut {
    payload: {
        timeMs: number;
        answers: Record<string, number>;
    };
    response: {};
}
