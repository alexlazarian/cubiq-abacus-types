export interface IClientStudentSelf {
    name: string;
    email: string;
    avatar: string;
    groupObjectId: {
        groupName: string;
        groupId: string;
    };
    stars: number;
    joinedOn: string;
}
