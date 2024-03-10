import { GameStatus, GameType } from '../../service/homeworkTypes';

interface BankItem {
    question: string;
    correctAnswer: number;
    userAnswer: number | null;
    _id: string;
}

interface HomeworkObject {
    gameSettings: {
        mode: GameType;
        category: string;
        rounds: number;
        chain: number;
        flashIn: number | null;
        flashOut: number | null;
    };
    _id: string;
    dateStart: string;
    dateEnd: string;
    dateCreated: string;
    reviewed: boolean;
}

export interface IClientStudentAssignment {
    _id: string;
    homeworkObjectId: HomeworkObject;
    startOn: string;
    endOn: string;
    createdOn: string;
    bank: BankItem[];
    status: GameStatus;
    due: string;
    daysDiff: number;
}
