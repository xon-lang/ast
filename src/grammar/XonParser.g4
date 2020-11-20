parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

@parser::header { 
// @ts-nocheck
}

program: imports* statement* definition*;

imports:      importPath ':' importMember (',' importMember)* | LineBreak;
importPath:   ID ('-' ID)* '/' ID ('-' ID)*;
importMember: name = ID ('as' alias = ID)?;

definition: name = ID ':' LineBreak INDENT member+ DEDENT;
member:
    name = ID type? ('=' value = expression)?                # propertyMember
    | function                                               # methodMember
    | 'pass'                                                 # passMember
    | operator '(' ID ',' ID type ')' returnType = type body # operatorMember
    | LineBreak                                              # lineBreakMember
    ;

operator: '+' | '-' | '*' | '/' | '%' | '^' | '&&' | '||' | 'and' | 'xor' | 'or' | '>' | '<' | '>>' | '<<' | '==' | '!=';

statement:
    'if' expression body ('elif' expression body)* ('else' body)?                                       # ifStatement
    | 'select' (value = expression)? ':' LineBreak INDENT (cases += expression body LineBreak?)+ DEDENT # selectStatement
    | 'loop' ((value = ID (',' key = ID?)? (',' index = ID)? 'in')? expression)? body                   # loopStatement
    | 'pass'                                                                                            # passStatement
    | 'continue'                                                                                        # continueStatement
    | 'break'                                                                                           # breakStatement
    | 'return' expression?                                                                              # returnStatement
    | function                                                                                          # functionStatement
    | (assignmentsList '=')+ assignmentValue                                                            # assignmentStatement
    | expression                                                                                        # expressionStatement
    | Preprocessor                                                                                      # preprocessorStatement
    | LineBreak                                                                                         # lineBreakStatement
    ;

assignmentValue:   expression | spreadItem (',' spreadItem)*;
assignmentsList:   leftAssignments | leftAssignments middleAssignments rightAssignments? | middleAssignments rightAssignments?;
leftAssignments:   ID (',' ID?)* | (',' ID?)+;
middleAssignments: '...' ID? (',' '...' ID?)*;
rightAssignments:  (',' ID?)+;

function: name = ID '(' (argument (',' argument)*)? ')' type? body;
argument: name = ID type? ('=' expression)?;
type:
    ID                                                              # simpleType
    | type '?'                                                      # nullableType
    | type '[' ']'                                                  # arrayType
    | '{' ID type ( ',' ID type)* '}'                               # objectType
    | '(' (args += type (',' args += type)*)? ')' returnType = type # functionType
    ;
body: ':' (statement | LineBreak INDENT statement+ DEDENT);

spreadItem: '...'? expression;
objectItem: (ID | '[' exprkey = expression ']') ':' exprVal = expression | spreadItem;

expression:
    object = expression '(' (args += expression (',' args += expression)*)? ')'                          # functionExpression
    | value = expression '[' index = expression ']'                                                      # indexExpression
    | value = expression '[' startPos = expression ':' endPos = expression? (':' step = expression)? ']' # sliceExpression
    | '@' ID?                                                                                            # instanceExpression
    | expression '?'? '.' ID                                                                             # memberExpression
    | '~' expression                                                                                     # asyncExpression
    | base = expression '^' exponent = expression                                                        # powExpression
    | '+' expression                                                                                     # unaryPlusExpression
    | '-' expression                                                                                     # unaryMinusExpression
    | 'not' expression                                                                                   # bitNotExpression
    | '!' expression                                                                                     # logicalNotExpression
    | left = expression operation = ('*' | '/' | '%') right = expression                                 # mulDivModExpression
    | left = expression operation = ('+' | '-') right = expression                                       # addSubExpression
    | left = expression operation = ('<<' | '>>') right = expression                                     # bitShiftExpression
    | left = expression operation = ('<' | '<=' | '>=' | '>') right = expression                         # relationalExpression
    | left = expression operation = ('==' | '!=') right = expression                                     # equalityExpression
    | left = expression 'and' right = expression                                                         # bitAndExpression
    | left = expression 'xor' right = expression                                                         # bitXorExpression
    | left = expression 'or' right = expression                                                          # bitOrExpression
    | left = expression '&&' right = expression                                                          # logicalAndExpression
    | left = expression '||' right = expression                                                          # logicalOrExpression
    | ID                                                                                                 # idExpression
    | literal                                                                                            # literalExpression
    | StringFormatStart (expression StringFormatMiddle)* expression StringFormatEnd                      # stringFormatExpression
    | '[' startPos = expression ':' endPos = expression (':' step = expression)? ']'                     # rangeExpression
    | '[' (spreadItem (',' spreadItem)*)? ']'                                                            # arrayExpression
    | '{' (objectItem (',' objectItem)*)? '}'                                                            # objectExpression
    | '(' expression ')'                                                                                 # parenthesizedExpression
    | left = expression '|' (ID ':')? right = expression                                                 # pipeExpression
    | '\\' (ID (',' ID)* ':')? expression                                                                # lambdaExpression
    ;

literal:
    NullLiteral      # nullLiteral
    | BooleanLiteral # booleanLiteral
    | NumberLiteral  # numberLiteral
    | StringLiteral  # stringLiteral
    ;