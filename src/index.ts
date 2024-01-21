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
