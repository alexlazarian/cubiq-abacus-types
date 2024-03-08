import { IAssignmentGet } from '../service/assignmentTypes';
import { IGroupGet } from '../service/groupTypes';
import { GameStatus, HomeworkStatus } from '../service/homeworkTypes';
import { IStudentGet } from '../service/studentTypes';
export type IStudentsRedux = IStudentGet['response'] & {};
export type IGroupsRedux = IGroupGet['response'] & {};
export type IHomeworksRedux = {
    id: string;
    groupName: string;
    startDate: string;
    startDateYYYYMMDD: string;
    endDate: string;
    endDateYYYYMMDD: string;
    expiresIn: string;
    status: HomeworkStatus;
    reviewed: boolean;
    assignments: AssignmentsGroupedByDay;
};

export interface ITeacherHomeworkItemAssignment {
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
interface AssignmentsGroupedByDay {
    [key: string]: {
        items: ITeacherHomeworkItemAssignment[];
        submissions: string;
        date: string;
    };
}
export type IAssignmentsRedux = IAssignmentGet['response'] & {
    due: string;
    daysDiff: number;
};
export {};
