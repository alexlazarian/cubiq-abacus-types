import { GameStatus, HomeworkStatus } from '../../service/homeworkTypes';

interface ITeacherHomeworkItemAssignment {
    status: GameStatus;
    homeworkId: string;
    student: {
        avatar: string;
        correctAnswers: string;
        email: string;
        name: string;
    };
    dates: {
        completedOn: string | null;
        createdOn: string;
        endOn: string;
        startOn: string;
    };
    completedTime: number | null;
    bank: {
        isCorrect: boolean;
        question: string;
    }[];
}
export interface IReformattedGroupedAssignments {
    items: ITeacherHomeworkItemAssignment[];
    submissions: string;
    date: string;
}
interface IAssignmentsGroupedByDay {
    [key: string]: IReformattedGroupedAssignments;
}

export interface IClientTeacherHomeworks {
    id: string;
    groupName: string;
    isEndDatePast: boolean;
    startDateRaw: string | Date;
    startDate: string;
    startDateYYYYMMDD: string;
    endDateRaw: string | Date;
    endDate: string;
    endDateYYYYMMDD: string;
    expiresIn: string;
    status: HomeworkStatus;
    assignments: IAssignmentsGroupedByDay;
}
