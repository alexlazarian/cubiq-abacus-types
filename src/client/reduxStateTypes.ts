import { IAssignmentGet } from '../service/assignmentTypes';
import { IGroupGet } from '../service/groupTypes';
import { IStudentGet } from '../service/studentTypes';

export type IStudentsRedux = IStudentGet['response'] & {};
export type IGroupsRedux = IGroupGet['response'] & {};
export type IHomeworksRedux = {
    id: string;
    groupName: string;
    startDate: string;
    expiresIn: string;
    settings: string;
    status: string;
};
export type IAssignmentsRedux = IAssignmentGet['response'] & {
    due: string;
};
