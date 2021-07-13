export interface bdCharcater {
    char_id:                     number;
    name:                        string;
    birthday:                    Birthday;
    occupation:                  string[];
    img:                         string;
    status:                      Status;
    nickname:                    string;
    appearance:                  number[];
    portrayed:                   string;
    category:                    Category;
    better_call_saul_appearance: number[];
}

export enum Birthday {
    The07081993 = "07-08-1993",
    The08111970 = "08-11-1970",
    The09071958 = "09-07-1958",
    The09241984 = "09-24-1984",
    Unknown = "Unknown",
}

export enum Category {
    BetterCallSaul = "Better Call Saul",
    BreakingBad = "Breaking Bad",
    BreakingBadBetterCallSaul = "Breaking Bad, Better Call Saul",
}

export enum Status {
    Alive = "Alive",
    Deceased = "Deceased",
    PresumedDead = "Presumed dead",
    Unknown = "Unknown",
}