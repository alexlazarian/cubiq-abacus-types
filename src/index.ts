// Student Types
export interface IStudentGet {
    payload: {};
    response: {
        name: string;
        email: string;
        avatar: string;
        password: string;
        groupObjectId: {
            groupName: string;
            groupId: string;
        };
        stars: number;
        joinedOn: string | Date;
    };
}

export interface IStudentPost {
    payload: {
        name: string;
        email: string;
        groupId: string;
        password: string;
        avatar: string;
    };
    response: {
        student: IStudentGet['response'];
    };
}

export interface IStudentPut {
    payload: {
        name: string;
        email: string;
        groupId: string;
        password: string;
        avatar: string;
    };
    response: {
        student: IStudentGet['response'];
    };
}

export interface IStudentDelete {
    payload: {
        email: string;
    };
    response: {
        student: {
            email: string;
        };
    };
}

// Group Types

export interface IGroupGet {
    payload: {};
    response: {
        groupName: string;
        studentIds: {
            name: string;
            email: string;
            avatar: string;
            stars: number;
            joinedOn: Date | string;
        }[];
        groupId: string;
    };
}

export interface IGroupPost {
    payload: {
        groupName: string;
        studentEmails: Array<string>;
    };
    response: {
        group: {
            groupId: string;
            groupName: string;
            studentIds: Array<string>;
        };
    };
}

// Error Types / Response Types

export interface ErrorResponse {
    message: string;
}
