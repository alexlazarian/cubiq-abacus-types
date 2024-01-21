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
        joinedOn: Date | string;
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
        groupId: string;
        groupName: string;
        studentIds: {
            name: string;
            email: string;
            avatar: string;
            stars: number;
            joinedOn: Date | string;
        }[];
    };
}

export interface IGroupPost {
    payload: {
        groupName: string;
        studentEmails: Array<string>;
    };
    response: {
        group: IGroupGet['response'];
    };
}

export interface IGroupPut {
    payload: {
        groupId: string;
        groupName: string;
        addStudentEmails: Array<string>;
        removeStudentEmails: Array<string>;
    };
    response: {
        group: {
            groupId: string;
            groupName: string;
            studentIds: {
                name: string;
                email: string;
                avatar: string;
                stars: number;
                joinedOn: Date | string;
            }[];
        };
        removedStudentIds: {
            name: string;
            email: string;
            avatar: string;
            stars: number;
            joinedOn: Date | string;
        }[];
        addedStudentIds: {
            name: string;
            email: string;
            avatar: string;
            stars: number;
            joinedOn: Date | string;
        }[];
    };
}

export interface IGroupDelete {
    payload: {
        groupId: string;
    };
    response: {
        group: {
            groupId: string;
        };
    };
}

export interface IHomeworkGet {
    payload: {};
    response: {
        groupObjectId: {
            groupName: string;
            groupId: string;
        };
        startDate: Date | string;
        endDate: Date | string;
        gameSettings: {
            mode: 'column' | 'flash';
            category: 'addition' | 'subtraction' | 'multiplication' | 'division';
            rounds: number;
            chain: number;
            flashIn: number;
            flashOut: number;
        };
    };
}

export interface IHomeworkPost {
    payload: {
        groupId: string;
        startDate: Date | string;
        endDate: Date | string;
        createdOn: Date | string;
        gameSettings: {
            mode: 'column' | 'flash';
            category: 'addition' | 'subtraction' | 'multiplication' | 'division';
            rounds: number;
            chain: number;
            flashIn: number;
            flashOut: number;
        };
    };
    response: {
        homework: IHomeworkGet['response'];
    };
}

export interface IHomeworkDelete {
    payload: {
        homeworkId: string;
    };
    response: {
        homework: {
            homeworkId: string;
        };
    };
}

// 1. Commit code
// 2. npm version patch
// 3. npm publish --access public

// Error Types / Response Types

export interface ErrorResponse {
    message: string;
}
