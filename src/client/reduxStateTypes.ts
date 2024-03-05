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
    assignments: AssignmentsGroupedByDay;
};

interface AssignmentBank {
    question: string;
    correctAnswer: number;
    userAnswer: number | null;
    _id: string;
}

interface StudentObject {
    name: string;
    email: string;
    avatar: string;
}

export interface IAssignment {
    homeworkObjectId: string;
    studentObjectId: StudentObject;
    startOn: string;
    endOn: string;
    createdOn: string;
    bank: AssignmentBank[];
    status: GameStatus;
    completedOn: string | null;
    completedTime: number | null;
}

interface AssignmentsGroupedByDay {
    [key: string]: {
        items: IAssignment[];
        submissions: string;
        date: string;
    };
}

export type IAssignmentsRedux = IAssignmentGet['response'] & {
    due: string;
    daysDiff: number;
};
