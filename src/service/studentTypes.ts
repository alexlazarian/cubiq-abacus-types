// Student Types
export interface IStudentGet {
    payload: {};
    response: {
        name: string;
        email: string;
        avatar: string;
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

export interface IStudentUploadAvatar {
    payload: {
        formData: string;
        payload: IStudentPut['payload'];
    };
    response: {
        email: string;
        avatarUrl: string;
    };
}
