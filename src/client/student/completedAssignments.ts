import { GameStatus, GameType } from '../../service/homeworkTypes';

interface HomeworkObject {
    gameSettings: {
        mode: GameType;
        category: string;
        rounds: number;
        chain: number;
        flashIn: number;
        flashOut: number;
    };
    _id: string;
    dateStart: string;
    dateEnd: string;
    dateCreated: string;
    reviewed: boolean;
}

interface BankItem {
    question: string;
    isCorrect: boolean;
}

export interface IClientStudentCompletedAssignment {
    _id: string;
    homeworkObjectId: HomeworkObject;
    startOn: string;
    endOn: string;
    createdOn: string;
    bank: BankItem[];
    status: GameStatus;
    completedOn: string;
    completedTime: string;
    correctAnswers: string;
    stars: number;
}