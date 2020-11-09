export class SyntaxError {
    constructor(expected: any, found: any, offset: any, line: any, column: any);

    // Native method; no parameter or return type inference available
    public toString(): any;

}

export enum OdataParserRule {
    WSP,
    DIGIT,
    INT,
    HEXDIG,
    HEXDIG2,
    HEXDIG4,
    HEXDIG8,
    SQUOTE,
    primitiveLiteral,
    null,
    binary,
    boolean,
    byte,
    dateTime,
    dateTimeOffset,
    dateTimeBodyA,
    dateTimeBodyB,
    dateTimeBodyC,
    dateTimeBodyD,
    dateTimeBody,
    dateTimeOffsetBody,
    decimal,
    double,
    guid,
    int32,
    int64,
    sbyte,
    single,
    string,
    oneToNine,
    zeroToTwelve,
    zeroToThirteen,
    zeroToSixty,
    zeroToThirtyOne,
    zeroToTwentyFour,
    year,
    sign,
    nan,
    negativeInfinity,
    positiveInfinity,
    nanInfinity,
    unreserved,
    validstring,
    escapedQuote,
    identifierPart,
    identifier,
    callback,
    top,
    expand,
    expandList,
    skip,
    format,
    inlinecount,
    orderby,
    orderbyList,
    select,
    identifierPathParts,
    identifierPath,
    selectList,
    filter,
    filterExpr,
    booleanFunctions2Args,
    booleanFunc,
    otherFunctions1Arg,
    otherFunc1,
    otherFunctions2Arg,
    otherFunc2,
    cond,
    part,
    op,
    unsupported,
    expList,
    exp,
    query,
}

export enum IFilterOperation {
    logicalAnd = "and",
    logicalOr = "or",
    logicalNegation = "not",
    equal = "eq",
    notEqual = "ne",
    lessThan = "lt",
    lessThanOrEqual = "le",
    greaterThan = "gt",
    greatherThanOrEqual = "ge",
    addition = "add",
    substraction = "sub",
    multiplication = "mul",
    division = "div",
    modulo = "mod",
    in = "in",
}

export interface IFilterFunctionCall {
    type: "functioncall";
    func: string;
    args: IFilterValueProperty[] | IFilterValueLiteral[];
}

export interface IFilterValueProperty {
    type: "property";
    name?: string;
}

export interface ICollectionFilter {
    type: "collectionfilter";
    operator: "any" | "all";
    property: IFilterValueProperty;
    value: IFilterComparison | ICollectionFilter | IFilterFunctionCall;
}

export interface IFilterValueLiteral {
    type: "literal";
    value?: string;
}

export interface IFilterValueList {
    type: "list";
    value: any[];
}

export interface IFilterComparison {
    type: IFilterOperation;
    left: IFilterValueProperty | IFilterValueLiteral | IFilterComparison | IFilterFunctionCall | IFilterValueList;
    right: IFilterValueProperty | IFilterValueLiteral | IFilterComparison | IFilterFunctionCall | IFilterValueList;
}

export interface IODataProperties {
    $filter?: IFilterComparison | ICollectionFilter | IFilterFunctionCall;
    $top?: number;
    $skip?: number;
    $select?: string[];
    $search?: string;
    $inlinecount?: any;
    $callback?: any;
    $expand?: string[];
    $orderby?: string[];
}

export function parse(input: string, startRule?: OdataParserRule): IODataProperties;

export function toSource(): any;

export namespace parse {
    const prototype: {};

}

export namespace toSource {
    const prototype: {};
}
