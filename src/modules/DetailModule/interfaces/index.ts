export interface IDescription {
    readonly type: 'description';
    readonly text: string;
}

export interface ITerminal {
    readonly type: 'terminal';
    readonly text: string;
}

export interface ICode {
    readonly type: 'code';
    readonly codes: {
        readonly lang: string;
        readonly code: string;
    }[]
}

export interface IList {
    readonly type: 'list';
    readonly title: string;
    readonly items: string[];
}

export interface IDescList {
    readonly type: 'descList';
    readonly list: {
        readonly title: string;
        readonly text: string;
    }[]
}

export type contentType = IDescription | ITerminal | ICode | IList | IDescList

export interface IDetail {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly category: string;
    readonly createdAt: string;
    readonly sections: ISection[];
}

export interface ISection {
    readonly title: string;
    readonly content: contentType[];
}