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
