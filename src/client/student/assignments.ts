import { GameCategory, GameStatus, GameType } from '../../service/homeworkTypes';

interface BankItem {
    question: string;
    correctAnswer: number;
    userAnswer: number | null;
    _id: string;
}

interface HomeworkObject {
    gameSettings: {
        mode: GameType;
        category: GameCategory;
        rounds: number;
        chain: number;
        flashIn: number | null;
        flashOut: number | null;
        flashInSeconds: number | null;
        flashOutSeconds: number | null;
    };
    _id: string;
    dateStart: string | Date;
    dateEnd: string | Date;
    dateCreated: string | Date;
    reviewed: boolean;
}

export interface IClientStudentAssignment {
    _id: string;
    homeworkObjectId: HomeworkObject;
    startOn: string | Date;
    endOn: string | Date;
    createdOn: string | Date;
    bank: BankItem[];
    status: GameStatus;
    due: string;
    daysDiff: number;
}
