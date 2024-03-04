import { IAssignmentGet } from '../service/assignmentTypes';
import { IGroupGet } from '../service/groupTypes';
import { HomeworkStatus } from '../service/homeworkTypes';
import { IStudentGet } from '../service/studentTypes';

export type IStudentsRedux = IStudentGet['response'] & {};
export type IGroupsRedux = IGroupGet['response'] & {};
export type IHomeworksRedux = {
    id: string;
    groupName: string;
    startDate: string;
    endDate: string;
    expiresIn: string;
    settings: string;
    status: HomeworkStatus;
    styleClassStatus: string;
    assignments: Omit<IAssignmentGet['response'], 'homeworkObjectId'>[];
};
export type IAssignmentsRedux = IAssignmentGet['response'] & {
    due: string;
    daysDiff: number;
};
