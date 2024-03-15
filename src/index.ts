export * from './client/student/assignments';
export * from './client/student/completedAssignments';
export * from './client/student/self';

export * from './client/teacher/groups';
export * from './client/teacher/homeworks';
export * from './client/teacher/students';

export * from './service/assignmentTypes';
export * from './service/studentTypes';
export * from './service/groupTypes';
export * from './service/homeworkTypes';

// 1. Commit code
// 2. npm version patch
// 3. npm publish --access public

// Error Types / Response Types

export interface ErrorResponse {
    message: string;
}

export enum Collections {
    LOCAL = 'cubiq-local',
    PROD = 'cubiq-prod',
}

export enum Environments {
    LOCAL = 'local',
    PROD = 'prod',
}
