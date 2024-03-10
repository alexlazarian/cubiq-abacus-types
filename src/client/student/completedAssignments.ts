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
    dateStart: string | Date;
    dateEnd: string | Date;
    dateCreated: string | Date;
    reviewed: boolean;
}

interface BankItem {
    question: string;
    isCorrect: boolean;
}

export interface IClientStudentCompletedAssignment {
    _id: string;
    homeworkObjectId: HomeworkObject;
    startOn: string | Date;
    endOn: string | Date;
    createdOn: string | Date;
    bank: BankItem[];
    status: GameStatus;
    completedOn: string;
    completedTime: string;
    correctAnswers: string;
    stars: number;
}
