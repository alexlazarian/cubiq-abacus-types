export interface IClientStudentSelf {
    name: string;
    email: string;
    avatar: string;
    password: string;
    groupObjectId: {
        groupName: string;
        groupId: string;
    };
    stars: number;
    joinedOn: string;
}
