// Generated from XonParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class XonParser extends Parser {
	public static readonly INDENT = 1;
	public static readonly DEDENT = 2;
	public static readonly Class = 3;
	public static readonly Enum = 4;
	public static readonly Scheme = 5;
	public static readonly If = 6;
	public static readonly Else = 7;
	public static readonly Loop = 8;
	public static readonly In = 9;
	public static readonly Pass = 10;
	public static readonly Continue = 11;
	public static readonly Break = 12;
	public static readonly Return = 13;
	public static readonly As = 14;
	public static readonly Var = 15;
	public static readonly Select = 16;
	public static readonly Preprocessor = 17;
	public static readonly LineBreak = 18;
	public static readonly BitAnd = 19;
	public static readonly BitOr = 20;
	public static readonly BitXor = 21;
	public static readonly RightShiftArithmetic = 22;
	public static readonly LeftShiftArithmetic = 23;
	public static readonly RightShiftLogical = 24;
	public static readonly OpenBracket = 25;
	public static readonly CloseBracket = 26;
	public static readonly OpenParen = 27;
	public static readonly CloseParen = 28;
	public static readonly OpenBrace = 29;
	public static readonly CloseBrace = 30;
	public static readonly Comma = 31;
	public static readonly Assign = 32;
	public static readonly QuestionMark = 33;
	public static readonly Colon = 34;
	public static readonly TwoColon = 35;
	public static readonly Dot = 36;
	public static readonly Plus = 37;
	public static readonly Minus = 38;
	public static readonly BitNot = 39;
	public static readonly Not = 40;
	public static readonly Multiply = 41;
	public static readonly Divide = 42;
	public static readonly Modulus = 43;
	public static readonly Pow = 44;
	public static readonly Sharp = 45;
	public static readonly LessThan = 46;
	public static readonly MoreThan = 47;
	public static readonly LessThanEquals = 48;
	public static readonly MoreThanEquals = 49;
	public static readonly Equals = 50;
	public static readonly NotEquals = 51;
	public static readonly And = 52;
	public static readonly Or = 53;
	public static readonly MultiplyAssign = 54;
	public static readonly DivideAssign = 55;
	public static readonly ModulusAssign = 56;
	public static readonly PlusAssign = 57;
	public static readonly MinusAssign = 58;
	public static readonly LeftShiftArithmeticAssign = 59;
	public static readonly RightShiftArithmeticAssign = 60;
	public static readonly RightShiftLogicalAssign = 61;
	public static readonly BitAndAssign = 62;
	public static readonly BitXorAssign = 63;
	public static readonly BitOrAssign = 64;
	public static readonly LambdaStart = 65;
	public static readonly Pipe = 66;
	public static readonly Underscore = 67;
	public static readonly Declaration = 68;
	public static readonly Constant = 69;
	public static readonly Spread = 70;
	public static readonly NullLiteral = 71;
	public static readonly BooleanLiteral = 72;
	public static readonly DecimalLiteral = 73;
	public static readonly FloatLiteral = 74;
	public static readonly StringLiteral = 75;
	public static readonly StringFormatStart = 76;
	public static readonly StringFormatMiddle = 77;
	public static readonly StringFormatEnd = 78;
	public static readonly ID = 79;
	public static readonly Skip = 80;
	public static readonly UnexpectedCharacter = 81;
	public static readonly RULE_program = 0;
	public static readonly RULE_imports = 1;
	public static readonly RULE_importPath = 2;
	public static readonly RULE_importMember = 3;
	public static readonly RULE_definition = 4;
	public static readonly RULE_member = 5;
	public static readonly RULE_statement = 6;
	public static readonly RULE_argument = 7;
	public static readonly RULE_body = 8;
	public static readonly RULE_expression = 9;
	public static readonly RULE_literal = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "imports", "importPath", "importMember", "definition", "member", 
		"statement", "argument", "body", "expression", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'class'", "'enum'", "'scheme'", "'if'", 
		"'else'", "'loop'", "'in'", "'pass'", "'continue'", "'break'", "'return'", 
		"'as'", "'var'", "'select'", undefined, undefined, "'and'", "'or'", "'xor'", 
		"'>>'", "'<<'", "'>>>'", "'['", "']'", "'('", "')'", "'{'", "'}'", "','", 
		"'='", "'?'", "':'", "'::'", "'.'", "'+'", "'-'", "'~'", "'!'", "'*'", 
		"'/'", "'%'", "'^'", "'#'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", 
		"'&&'", "'||'", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", 
		"'>>>='", "'&='", "'^='", "'|='", "'\\'", "'|'", "'_'", "':='", "'::='", 
		"'...'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "Class", "Enum", "Scheme", "If", "Else", 
		"Loop", "In", "Pass", "Continue", "Break", "Return", "As", "Var", "Select", 
		"Preprocessor", "LineBreak", "BitAnd", "BitOr", "BitXor", "RightShiftArithmetic", 
		"LeftShiftArithmetic", "RightShiftLogical", "OpenBracket", "CloseBracket", 
		"OpenParen", "CloseParen", "OpenBrace", "CloseBrace", "Comma", "Assign", 
		"QuestionMark", "Colon", "TwoColon", "Dot", "Plus", "Minus", "BitNot", 
		"Not", "Multiply", "Divide", "Modulus", "Pow", "Sharp", "LessThan", "MoreThan", 
		"LessThanEquals", "MoreThanEquals", "Equals", "NotEquals", "And", "Or", 
		"MultiplyAssign", "DivideAssign", "ModulusAssign", "PlusAssign", "MinusAssign", 
		"LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", "RightShiftLogicalAssign", 
		"BitAndAssign", "BitXorAssign", "BitOrAssign", "LambdaStart", "Pipe", 
		"Underscore", "Declaration", "Constant", "Spread", "NullLiteral", "BooleanLiteral", 
		"DecimalLiteral", "FloatLiteral", "StringLiteral", "StringFormatStart", 
		"StringFormatMiddle", "StringFormatEnd", "ID", "Skip", "UnexpectedCharacter",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XonParser._LITERAL_NAMES, XonParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return XonParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "XonParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return XonParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return XonParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(XonParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XonParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Pass) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Select) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.Dot - 36)) | (1 << (XonParser.Plus - 36)) | (1 << (XonParser.Minus - 36)) | (1 << (XonParser.BitNot - 36)) | (1 << (XonParser.Not - 36)) | (1 << (XonParser.LambdaStart - 36)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (XonParser.Spread - 70)) | (1 << (XonParser.NullLiteral - 70)) | (1 << (XonParser.BooleanLiteral - 70)) | (1 << (XonParser.DecimalLiteral - 70)) | (1 << (XonParser.FloatLiteral - 70)) | (1 << (XonParser.StringLiteral - 70)) | (1 << (XonParser.StringFormatStart - 70)) | (1 << (XonParser.ID - 70)))) !== 0)) {
				{
				this.state = 24;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 22;
					this.statement();
					}
					break;

				case 2:
					{
					this.state = 23;
					this.definition();
					}
					break;
				}
				}
				this.state = 28;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public imports(): ImportsContext {
		let _localctx: ImportsContext = new ImportsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_imports);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this.importPath();
			this.state = 30;
			this.match(XonParser.Colon);
			this.state = 42;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.Multiply:
				{
				this.state = 31;
				this.match(XonParser.Multiply);
				this.state = 32;
				this.match(XonParser.As);
				this.state = 33;
				_localctx._alias = this.match(XonParser.ID);
				}
				break;
			case XonParser.ID:
				{
				this.state = 34;
				this.importMember();
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 35;
					this.match(XonParser.Comma);
					this.state = 36;
					this.importMember();
					}
					}
					this.state = 41;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importPath(): ImportPathContext {
		let _localctx: ImportPathContext = new ImportPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_importPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Dot || _la === XonParser.StringLiteral || _la === XonParser.ID) {
				{
				{
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Dot) {
					{
					{
					this.state = 44;
					this.match(XonParser.Dot);
					}
					}
					this.state = 49;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 50;
				_la = this._input.LA(1);
				if (!(_la === XonParser.StringLiteral || _la === XonParser.ID)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 55;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importMember(): ImportMemberContext {
		let _localctx: ImportMemberContext = new ImportMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_importMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			_localctx._name = this.match(XonParser.ID);
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.As) {
				{
				this.state = 57;
				this.match(XonParser.As);
				this.state = 58;
				_localctx._alias = this.match(XonParser.ID);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 61;
			_localctx._name = this.match(XonParser.ID);
			this.state = 62;
			this.match(XonParser.Colon);
			this.state = 63;
			this.match(XonParser.LineBreak);
			this.state = 64;
			this.match(XonParser.INDENT);
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 65;
				this.member();
				}
				}
				this.state = 68;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === XonParser.Pass || _la === XonParser.LineBreak || _la === XonParser.ID);
			this.state = 70;
			this.match(XonParser.DEDENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public member(): MemberContext {
		let _localctx: MemberContext = new MemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_member);
		let _la: number;
		try {
			this.state = 97;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 72;
				(_localctx as PropertyMemberContext)._name = this.match(XonParser.ID);
				this.state = 74;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 73;
					(_localctx as PropertyMemberContext)._type = this.match(XonParser.ID);
					}
					break;
				}
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Assign) {
					{
					this.state = 76;
					this.match(XonParser.Assign);
					this.state = 77;
					(_localctx as PropertyMemberContext)._value = this.expression(0);
					}
				}

				}
				break;

			case 2:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 80;
				this.match(XonParser.ID);
				this.state = 81;
				this.match(XonParser.OpenParen);
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 82;
					this.argument();
					this.state = 87;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 83;
						this.match(XonParser.Comma);
						this.state = 84;
						this.argument();
						}
						}
						this.state = 89;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 92;
				this.match(XonParser.CloseParen);
				this.state = 93;
				this.body();
				}
				break;

			case 3:
				_localctx = new DefinitionMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 94;
				this.definition();
				}
				break;

			case 4:
				_localctx = new PassMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 95;
				this.match(XonParser.Pass);
				}
				break;

			case 5:
				_localctx = new LineBreakMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 96;
				this.match(XonParser.LineBreak);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 126;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 99;
				this.match(XonParser.Preprocessor);
				}
				break;

			case 2:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 100;
				this.match(XonParser.ID);
				this.state = 101;
				this.match(XonParser.Assign);
				this.state = 102;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new FunctionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 103;
				this.match(XonParser.ID);
				this.state = 104;
				this.match(XonParser.OpenParen);
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 105;
					this.argument();
					this.state = 110;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 106;
						this.match(XonParser.Comma);
						this.state = 107;
						this.argument();
						}
						}
						this.state = 112;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 115;
				this.match(XonParser.CloseParen);
				this.state = 116;
				this.body();
				}
				break;

			case 4:
				_localctx = new PassStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 117;
				this.match(XonParser.Pass);
				}
				break;

			case 5:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 118;
				this.match(XonParser.Continue);
				}
				break;

			case 6:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 119;
				this.match(XonParser.Break);
				}
				break;

			case 7:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 120;
				this.match(XonParser.Return);
				this.state = 122;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 121;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 8:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 124;
				this.expression(0);
				}
				break;

			case 9:
				_localctx = new LineBreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 125;
				this.match(XonParser.LineBreak);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			_localctx._name = this.match(XonParser.ID);
			this.state = 129;
			_localctx._type = this.match(XonParser.ID);
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.Assign) {
				{
				this.state = 130;
				this.match(XonParser.Assign);
				this.state = 131;
				_localctx._value = this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.match(XonParser.Colon);
			this.state = 145;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 135;
				this.statement();
				}
				break;

			case 2:
				{
				this.state = 136;
				this.match(XonParser.LineBreak);
				this.state = 137;
				this.match(XonParser.INDENT);
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 138;
					this.statement();
					}
					}
					this.state = 141;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Pass) | (1 << XonParser.Continue) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Select) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.Dot - 36)) | (1 << (XonParser.Plus - 36)) | (1 << (XonParser.Minus - 36)) | (1 << (XonParser.BitNot - 36)) | (1 << (XonParser.Not - 36)) | (1 << (XonParser.LambdaStart - 36)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (XonParser.Spread - 70)) | (1 << (XonParser.NullLiteral - 70)) | (1 << (XonParser.BooleanLiteral - 70)) | (1 << (XonParser.DecimalLiteral - 70)) | (1 << (XonParser.FloatLiteral - 70)) | (1 << (XonParser.StringLiteral - 70)) | (1 << (XonParser.StringFormatStart - 70)) | (1 << (XonParser.ID - 70)))) !== 0));
				this.state = 143;
				this.match(XonParser.DEDENT);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				_localctx = new IfExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 148;
				this.match(XonParser.If);
				this.state = 149;
				this.expression(0);
				this.state = 150;
				this.body();
				this.state = 157;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 151;
					this.match(XonParser.Else);
					this.state = 154;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.If) {
						{
						this.state = 152;
						this.match(XonParser.If);
						this.state = 153;
						this.expression(0);
						}
					}

					this.state = 156;
					this.body();
					}
					break;
				}
				}
				break;

			case 2:
				{
				_localctx = new LoopExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 159;
				this.match(XonParser.Loop);
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.Dot - 36)) | (1 << (XonParser.Plus - 36)) | (1 << (XonParser.Minus - 36)) | (1 << (XonParser.BitNot - 36)) | (1 << (XonParser.Not - 36)) | (1 << (XonParser.LambdaStart - 36)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (XonParser.Spread - 70)) | (1 << (XonParser.NullLiteral - 70)) | (1 << (XonParser.BooleanLiteral - 70)) | (1 << (XonParser.DecimalLiteral - 70)) | (1 << (XonParser.FloatLiteral - 70)) | (1 << (XonParser.StringLiteral - 70)) | (1 << (XonParser.StringFormatStart - 70)) | (1 << (XonParser.ID - 70)))) !== 0)) {
					{
					this.state = 172;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
					case 1:
						{
						this.state = 160;
						(_localctx as LoopExpressionContext)._value = this.match(XonParser.ID);
						this.state = 165;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
						case 1:
							{
							this.state = 161;
							this.match(XonParser.Comma);
							this.state = 163;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 162;
								(_localctx as LoopExpressionContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 169;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 167;
							this.match(XonParser.Comma);
							this.state = 168;
							(_localctx as LoopExpressionContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 171;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 174;
					this.expression(0);
					}
				}

				this.state = 177;
				this.body();
				}
				break;

			case 3:
				{
				_localctx = new SelectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 178;
				this.match(XonParser.Select);
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.Dot - 36)) | (1 << (XonParser.Plus - 36)) | (1 << (XonParser.Minus - 36)) | (1 << (XonParser.BitNot - 36)) | (1 << (XonParser.Not - 36)) | (1 << (XonParser.LambdaStart - 36)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (XonParser.Spread - 70)) | (1 << (XonParser.NullLiteral - 70)) | (1 << (XonParser.BooleanLiteral - 70)) | (1 << (XonParser.DecimalLiteral - 70)) | (1 << (XonParser.FloatLiteral - 70)) | (1 << (XonParser.StringLiteral - 70)) | (1 << (XonParser.StringFormatStart - 70)) | (1 << (XonParser.ID - 70)))) !== 0)) {
					{
					this.state = 179;
					(_localctx as SelectExpressionContext)._value = this.expression(0);
					this.state = 182;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.As) {
						{
						this.state = 180;
						this.match(XonParser.As);
						this.state = 181;
						this.match(XonParser.ID);
						}
					}

					}
				}

				this.state = 186;
				this.match(XonParser.Colon);
				this.state = 187;
				this.match(XonParser.LineBreak);
				this.state = 188;
				this.match(XonParser.INDENT);
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 189;
					(_localctx as SelectExpressionContext)._expression = this.expression(0);
					(_localctx as SelectExpressionContext)._cases.push((_localctx as SelectExpressionContext)._expression);
					this.state = 190;
					this.body();
					this.state = 192;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.LineBreak) {
						{
						this.state = 191;
						this.match(XonParser.LineBreak);
						}
					}

					}
					}
					this.state = 196;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.Dot - 36)) | (1 << (XonParser.Plus - 36)) | (1 << (XonParser.Minus - 36)) | (1 << (XonParser.BitNot - 36)) | (1 << (XonParser.Not - 36)) | (1 << (XonParser.LambdaStart - 36)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (XonParser.Spread - 70)) | (1 << (XonParser.NullLiteral - 70)) | (1 << (XonParser.BooleanLiteral - 70)) | (1 << (XonParser.DecimalLiteral - 70)) | (1 << (XonParser.FloatLiteral - 70)) | (1 << (XonParser.StringLiteral - 70)) | (1 << (XonParser.StringFormatStart - 70)) | (1 << (XonParser.ID - 70)))) !== 0));
				this.state = 198;
				this.match(XonParser.DEDENT);
				}
				break;

			case 4:
				{
				_localctx = new InstanceMemberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 200;
				this.match(XonParser.Dot);
				this.state = 201;
				this.match(XonParser.ID);
				}
				break;

			case 5:
				{
				_localctx = new SpreadExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 202;
				this.match(XonParser.Spread);
				this.state = 203;
				this.expression(25);
				}
				break;

			case 6:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 204;
				this.match(XonParser.Plus);
				this.state = 205;
				this.expression(23);
				}
				break;

			case 7:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 206;
				this.match(XonParser.Minus);
				this.state = 207;
				this.expression(22);
				}
				break;

			case 8:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 208;
				this.match(XonParser.BitNot);
				this.state = 209;
				this.expression(21);
				}
				break;

			case 9:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 210;
				this.match(XonParser.Not);
				this.state = 211;
				this.expression(20);
				}
				break;

			case 10:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 212;
				this.match(XonParser.ID);
				}
				break;

			case 11:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 213;
				this.literal();
				}
				break;

			case 12:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 214;
				this.match(XonParser.StringFormatStart);
				this.state = 220;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 215;
						this.expression(0);
						this.state = 216;
						this.match(XonParser.StringFormatMiddle);
						}
						}
					}
					this.state = 222;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				}
				this.state = 223;
				this.expression(0);
				this.state = 224;
				this.match(XonParser.StringFormatEnd);
				}
				break;

			case 13:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 226;
				this.match(XonParser.OpenBracket);
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.Dot - 36)) | (1 << (XonParser.Plus - 36)) | (1 << (XonParser.Minus - 36)) | (1 << (XonParser.BitNot - 36)) | (1 << (XonParser.Not - 36)) | (1 << (XonParser.LambdaStart - 36)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (XonParser.Spread - 70)) | (1 << (XonParser.NullLiteral - 70)) | (1 << (XonParser.BooleanLiteral - 70)) | (1 << (XonParser.DecimalLiteral - 70)) | (1 << (XonParser.FloatLiteral - 70)) | (1 << (XonParser.StringLiteral - 70)) | (1 << (XonParser.StringFormatStart - 70)) | (1 << (XonParser.ID - 70)))) !== 0)) {
					{
					this.state = 227;
					(_localctx as ArrayExpressionContext)._expression = this.expression(0);
					(_localctx as ArrayExpressionContext)._items.push((_localctx as ArrayExpressionContext)._expression);
					this.state = 232;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 228;
						this.match(XonParser.Comma);
						this.state = 229;
						(_localctx as ArrayExpressionContext)._expression = this.expression(0);
						(_localctx as ArrayExpressionContext)._items.push((_localctx as ArrayExpressionContext)._expression);
						}
						}
						this.state = 234;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 237;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 14:
				{
				_localctx = new RangeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 238;
				this.match(XonParser.OpenBracket);
				this.state = 239;
				(_localctx as RangeExpressionContext)._startPos = this.expression(0);
				this.state = 240;
				this.match(XonParser.Colon);
				this.state = 241;
				(_localctx as RangeExpressionContext)._end = this.expression(0);
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 242;
					this.match(XonParser.Colon);
					this.state = 243;
					(_localctx as RangeExpressionContext)._step = this.expression(0);
					}
				}

				this.state = 246;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 15:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 248;
				this.match(XonParser.OpenBrace);
				this.state = 261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 249;
					this.match(XonParser.ID);
					this.state = 250;
					this.match(XonParser.Colon);
					this.state = 251;
					this.expression(0);
					this.state = 258;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 252;
						this.match(XonParser.Comma);
						this.state = 253;
						this.match(XonParser.ID);
						this.state = 254;
						this.match(XonParser.Colon);
						this.state = 255;
						this.expression(0);
						}
						}
						this.state = 260;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 263;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 16:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 264;
				this.match(XonParser.OpenParen);
				this.state = 265;
				this.expression(0);
				this.state = 266;
				this.match(XonParser.CloseParen);
				}
				break;

			case 17:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 268;
				this.match(XonParser.LambdaStart);
				this.state = 278;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 269;
					this.match(XonParser.ID);
					this.state = 274;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 270;
						this.match(XonParser.Comma);
						this.state = 271;
						this.match(XonParser.ID);
						}
						}
						this.state = 276;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 277;
					this.match(XonParser.Colon);
					}
					break;
				}
				this.state = 280;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 362;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 360;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 283;
						if (!(this.precpred(this._ctx, 24))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						}
						this.state = 284;
						this.match(XonParser.Pow);
						this.state = 285;
						(_localctx as PowExpressionContext)._exponent = this.expression(25);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 286;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 287;
						(_localctx as MulDivModExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.Multiply - 41)) | (1 << (XonParser.Divide - 41)) | (1 << (XonParser.Modulus - 41)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 288;
						(_localctx as MulDivModExpressionContext)._right = this.expression(20);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 289;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 290;
						(_localctx as AddSubExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.Plus || _la === XonParser.Minus)) {
							(_localctx as AddSubExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 291;
						(_localctx as AddSubExpressionContext)._right = this.expression(19);
						}
						break;

					case 4:
						{
						_localctx = new BitShiftExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 292;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 293;
						(_localctx as BitShiftExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.RightShiftArithmetic) | (1 << XonParser.LeftShiftArithmetic) | (1 << XonParser.RightShiftLogical))) !== 0))) {
							(_localctx as BitShiftExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 294;
						(_localctx as BitShiftExpressionContext)._right = this.expression(18);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 295;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 296;
						(_localctx as RelationalExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (XonParser.LessThan - 46)) | (1 << (XonParser.MoreThan - 46)) | (1 << (XonParser.LessThanEquals - 46)) | (1 << (XonParser.MoreThanEquals - 46)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 297;
						(_localctx as RelationalExpressionContext)._right = this.expression(17);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 298;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 299;
						(_localctx as EqualityExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.Equals || _la === XonParser.NotEquals)) {
							(_localctx as EqualityExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 300;
						(_localctx as EqualityExpressionContext)._right = this.expression(16);
						}
						break;

					case 7:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 301;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 302;
						this.match(XonParser.BitAnd);
						this.state = 303;
						(_localctx as BitAndExpressionContext)._right = this.expression(15);
						}
						break;

					case 8:
						{
						_localctx = new BitXorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 304;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 305;
						this.match(XonParser.BitXor);
						this.state = 306;
						(_localctx as BitXorExpressionContext)._right = this.expression(14);
						}
						break;

					case 9:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 307;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 308;
						this.match(XonParser.BitOr);
						this.state = 309;
						(_localctx as BitOrExpressionContext)._right = this.expression(13);
						}
						break;

					case 10:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 310;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 311;
						this.match(XonParser.And);
						this.state = 312;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(12);
						}
						break;

					case 11:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 313;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 314;
						this.match(XonParser.Or);
						this.state = 315;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(11);
						}
						break;

					case 12:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 316;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 317;
						this.match(XonParser.Pipe);
						this.state = 320;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
						case 1:
							{
							this.state = 318;
							this.match(XonParser.ID);
							this.state = 319;
							this.match(XonParser.Colon);
							}
							break;
						}
						this.state = 322;
						(_localctx as PipeExpressionContext)._right = this.expression(3);
						}
						break;

					case 13:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionExpressionContext)._object = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 323;
						if (!(this.precpred(this._ctx, 30))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 30)");
						}
						this.state = 324;
						this.match(XonParser.OpenParen);
						this.state = 333;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.Dot - 36)) | (1 << (XonParser.Plus - 36)) | (1 << (XonParser.Minus - 36)) | (1 << (XonParser.BitNot - 36)) | (1 << (XonParser.Not - 36)) | (1 << (XonParser.LambdaStart - 36)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (XonParser.Spread - 70)) | (1 << (XonParser.NullLiteral - 70)) | (1 << (XonParser.BooleanLiteral - 70)) | (1 << (XonParser.DecimalLiteral - 70)) | (1 << (XonParser.FloatLiteral - 70)) | (1 << (XonParser.StringLiteral - 70)) | (1 << (XonParser.StringFormatStart - 70)) | (1 << (XonParser.ID - 70)))) !== 0)) {
							{
							this.state = 325;
							(_localctx as FunctionExpressionContext)._expression = this.expression(0);
							(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
							this.state = 330;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 326;
								this.match(XonParser.Comma);
								this.state = 327;
								(_localctx as FunctionExpressionContext)._expression = this.expression(0);
								(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
								}
								}
								this.state = 332;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 335;
						this.match(XonParser.CloseParen);
						}
						break;

					case 14:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 336;
						if (!(this.precpred(this._ctx, 29))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 29)");
						}
						this.state = 337;
						this.match(XonParser.OpenBracket);
						this.state = 338;
						(_localctx as IndexExpressionContext)._index = this.expression(0);
						this.state = 339;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 15:
						{
						_localctx = new SliceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SliceExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 341;
						if (!(this.precpred(this._ctx, 28))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 28)");
						}
						this.state = 342;
						this.match(XonParser.OpenBracket);
						this.state = 343;
						(_localctx as SliceExpressionContext)._startPos = this.expression(0);
						this.state = 344;
						this.match(XonParser.Colon);
						this.state = 346;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Select) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.Dot - 36)) | (1 << (XonParser.Plus - 36)) | (1 << (XonParser.Minus - 36)) | (1 << (XonParser.BitNot - 36)) | (1 << (XonParser.Not - 36)) | (1 << (XonParser.LambdaStart - 36)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (XonParser.Spread - 70)) | (1 << (XonParser.NullLiteral - 70)) | (1 << (XonParser.BooleanLiteral - 70)) | (1 << (XonParser.DecimalLiteral - 70)) | (1 << (XonParser.FloatLiteral - 70)) | (1 << (XonParser.StringLiteral - 70)) | (1 << (XonParser.StringFormatStart - 70)) | (1 << (XonParser.ID - 70)))) !== 0)) {
							{
							this.state = 345;
							(_localctx as SliceExpressionContext)._endPos = this.expression(0);
							}
						}

						this.state = 350;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Colon) {
							{
							this.state = 348;
							this.match(XonParser.Colon);
							this.state = 349;
							(_localctx as SliceExpressionContext)._step = this.expression(0);
							}
						}

						this.state = 352;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 16:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 354;
						if (!(this.precpred(this._ctx, 27))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 27)");
						}
						this.state = 356;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.QuestionMark) {
							{
							this.state = 355;
							this.match(XonParser.QuestionMark);
							}
						}

						this.state = 358;
						this.match(XonParser.Dot);
						this.state = 359;
						this.match(XonParser.ID);
						}
						break;
					}
					}
				}
				this.state = 364;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_literal);
		try {
			this.state = 370;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NullLiteral:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 365;
				this.match(XonParser.NullLiteral);
				}
				break;
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 366;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.DecimalLiteral:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 367;
				this.match(XonParser.DecimalLiteral);
				}
				break;
			case XonParser.FloatLiteral:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 368;
				this.match(XonParser.FloatLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 369;
				this.match(XonParser.StringLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 24);

		case 1:
			return this.precpred(this._ctx, 19);

		case 2:
			return this.precpred(this._ctx, 18);

		case 3:
			return this.precpred(this._ctx, 17);

		case 4:
			return this.precpred(this._ctx, 16);

		case 5:
			return this.precpred(this._ctx, 15);

		case 6:
			return this.precpred(this._ctx, 14);

		case 7:
			return this.precpred(this._ctx, 13);

		case 8:
			return this.precpred(this._ctx, 12);

		case 9:
			return this.precpred(this._ctx, 11);

		case 10:
			return this.precpred(this._ctx, 10);

		case 11:
			return this.precpred(this._ctx, 2);

		case 12:
			return this.precpred(this._ctx, 30);

		case 13:
			return this.precpred(this._ctx, 29);

		case 14:
			return this.precpred(this._ctx, 28);

		case 15:
			return this.precpred(this._ctx, 27);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03S\u0177\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03\x02" +
		"\x07\x02\x1B\n\x02\f\x02\x0E\x02\x1E\v\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03(\n\x03\f\x03\x0E\x03+\v\x03" +
		"\x05\x03-\n\x03\x03\x04\x07\x040\n\x04\f\x04\x0E\x043\v\x04\x03\x04\x07" +
		"\x046\n\x04\f\x04\x0E\x049\v\x04\x03\x05\x03\x05\x03\x05\x05\x05>\n\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06E\n\x06\r\x06\x0E\x06" +
		"F\x03\x06\x03\x06\x03\x07\x03\x07\x05\x07M\n\x07\x03\x07\x03\x07\x05\x07" +
		"Q\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07X\n\x07\f\x07\x0E" +
		"\x07[\v\x07\x05\x07]\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07d\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07" +
		"\bo\n\b\f\b\x0E\br\v\b\x05\bt\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x05\b}\n\b\x03\b\x03\b\x05\b\x81\n\b\x03\t\x03\t\x03\t\x03\t\x05" +
		"\t\x87\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x06\n\x8E\n\n\r\n\x0E\n\x8F\x03" +
		"\n\x03\n\x05\n\x94\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v" +
		"\x9D\n\v\x03\v\x05\v\xA0\n\v\x03\v\x03\v\x03\v\x03\v\x05\v\xA6\n\v\x05" +
		"\v\xA8\n\v\x03\v\x03\v\x05\v\xAC\n\v\x03\v\x05\v\xAF\n\v\x03\v\x05\v\xB2" +
		"\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xB9\n\v\x05\v\xBB\n\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x05\v\xC3\n\v\x06\v\xC5\n\v\r\v\x0E\v\xC6\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xDD\n\v\f\v\x0E\v\xE0" +
		"\v\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xE9\n\v\f\v\x0E\v" +
		"\xEC\v\v\x05\v\xEE\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v" +
		"\xF7\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07" +
		"\v\u0103\n\v\f\v\x0E\v\u0106\v\v\x05\v\u0108\n\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u0113\n\v\f\v\x0E\v\u0116\v\v\x03" +
		"\v\x05\v\u0119\n\v\x03\v\x05\v\u011C\n\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0143\n\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u014B\n\v\f\v\x0E\v\u014E\v\v\x05" +
		"\v\u0150\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x05\v\u015D\n\v\x03\v\x03\v\x05\v\u0161\n\v\x03\v\x03\v\x03\v" +
		"\x03\v\x05\v\u0167\n\v\x03\v\x03\v\x07\v\u016B\n\v\f\v\x0E\v\u016E\v\v" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0175\n\f\x03\f\x02\x02\x03\x14\r" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x02\b\x04\x02MMQQ\x03\x02+-\x03\x02\'(\x03\x02\x18\x1A\x03" +
		"\x0203\x03\x0245\x02\u01C6\x02\x1C\x03\x02\x02\x02\x04\x1F\x03\x02\x02" +
		"\x02\x067\x03\x02\x02\x02\b:\x03\x02\x02\x02\n?\x03\x02\x02\x02\fc\x03" +
		"\x02\x02\x02\x0E\x80\x03\x02\x02\x02\x10\x82\x03\x02\x02\x02\x12\x88\x03" +
		"\x02\x02\x02\x14\u011B\x03\x02\x02\x02\x16\u0174\x03\x02\x02\x02\x18\x1B" +
		"\x05\x0E\b\x02\x19\x1B\x05\n\x06\x02\x1A\x18\x03\x02\x02\x02\x1A\x19\x03" +
		"\x02\x02\x02\x1B\x1E\x03\x02\x02\x02\x1C\x1A\x03\x02\x02\x02\x1C\x1D\x03" +
		"\x02\x02\x02\x1D\x03\x03\x02\x02\x02\x1E\x1C\x03\x02\x02\x02\x1F \x05" +
		"\x06\x04\x02 ,\x07$\x02\x02!\"\x07+\x02\x02\"#\x07\x10\x02\x02#-\x07Q" +
		"\x02\x02$)\x05\b\x05\x02%&\x07!\x02\x02&(\x05\b\x05\x02\'%\x03\x02\x02" +
		"\x02(+\x03\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02\x02*-\x03\x02" +
		"\x02\x02+)\x03\x02\x02\x02,!\x03\x02\x02\x02,$\x03\x02\x02\x02-\x05\x03" +
		"\x02\x02\x02.0\x07&\x02\x02/.\x03\x02\x02\x0203\x03\x02\x02\x021/\x03" +
		"\x02\x02\x0212\x03\x02\x02\x0224\x03\x02\x02\x0231\x03\x02\x02\x0246\t" +
		"\x02\x02\x0251\x03\x02\x02\x0269\x03\x02\x02\x0275\x03\x02\x02\x0278\x03" +
		"\x02\x02\x028\x07\x03\x02\x02\x0297\x03\x02\x02\x02:=\x07Q\x02\x02;<\x07" +
		"\x10\x02\x02<>\x07Q\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02>\t\x03" +
		"\x02\x02\x02?@\x07Q\x02\x02@A\x07$\x02\x02AB\x07\x14\x02\x02BD\x07\x03" +
		"\x02\x02CE\x05\f\x07\x02DC\x03\x02\x02\x02EF\x03\x02\x02\x02FD\x03\x02" +
		"\x02\x02FG\x03\x02\x02\x02GH\x03\x02\x02\x02HI\x07\x04\x02\x02I\v\x03" +
		"\x02\x02\x02JL\x07Q\x02\x02KM\x07Q\x02\x02LK\x03\x02\x02\x02LM\x03\x02" +
		"\x02\x02MP\x03\x02\x02\x02NO\x07\"\x02\x02OQ\x05\x14\v\x02PN\x03\x02\x02" +
		"\x02PQ\x03\x02\x02\x02Qd\x03\x02\x02\x02RS\x07Q\x02\x02S\\\x07\x1D\x02" +
		"\x02TY\x05\x10\t\x02UV\x07!\x02\x02VX\x05\x10\t\x02WU\x03\x02\x02\x02" +
		"X[\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z]\x03\x02\x02\x02" +
		"[Y\x03\x02\x02\x02\\T\x03\x02\x02\x02\\]\x03\x02\x02\x02]^\x03\x02\x02" +
		"\x02^_\x07\x1E\x02\x02_d\x05\x12\n\x02`d\x05\n\x06\x02ad\x07\f\x02\x02" +
		"bd\x07\x14\x02\x02cJ\x03\x02\x02\x02cR\x03\x02\x02\x02c`\x03\x02\x02\x02" +
		"ca\x03\x02\x02\x02cb\x03\x02\x02\x02d\r\x03\x02\x02\x02e\x81\x07\x13\x02" +
		"\x02fg\x07Q\x02\x02gh\x07\"\x02\x02h\x81\x05\x14\v\x02ij\x07Q\x02\x02" +
		"js\x07\x1D\x02\x02kp\x05\x10\t\x02lm\x07!\x02\x02mo\x05\x10\t\x02nl\x03" +
		"\x02\x02\x02or\x03\x02\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02qt\x03" +
		"\x02\x02\x02rp\x03\x02\x02\x02sk\x03\x02\x02\x02st\x03\x02\x02\x02tu\x03" +
		"\x02\x02\x02uv\x07\x1E\x02\x02v\x81\x05\x12\n\x02w\x81\x07\f\x02\x02x" +
		"\x81\x07\r\x02\x02y\x81\x07\x0E\x02\x02z|\x07\x0F\x02\x02{}\x05\x14\v" +
		"\x02|{\x03\x02\x02\x02|}\x03\x02\x02\x02}\x81\x03\x02\x02\x02~\x81\x05" +
		"\x14\v\x02\x7F\x81\x07\x14\x02\x02\x80e\x03\x02\x02\x02\x80f\x03\x02\x02" +
		"\x02\x80i\x03\x02\x02\x02\x80w\x03\x02\x02\x02\x80x\x03\x02\x02\x02\x80" +
		"y\x03\x02\x02\x02\x80z\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x7F\x03" +
		"\x02\x02\x02\x81\x0F\x03\x02\x02\x02\x82\x83\x07Q\x02\x02\x83\x86\x07" +
		"Q\x02\x02\x84\x85\x07\"\x02\x02\x85\x87\x05\x14\v\x02\x86\x84\x03\x02" +
		"\x02\x02\x86\x87\x03\x02\x02\x02\x87\x11\x03\x02\x02\x02\x88\x93\x07$" +
		"\x02\x02\x89\x94\x05\x0E\b\x02\x8A\x8B\x07\x14\x02\x02\x8B\x8D\x07\x03" +
		"\x02\x02\x8C\x8E\x05\x0E\b\x02\x8D\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02" +
		"\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91\x03\x02" +
		"\x02\x02\x91\x92\x07\x04\x02\x02\x92\x94\x03\x02\x02\x02\x93\x89\x03\x02" +
		"\x02\x02\x93\x8A\x03\x02\x02\x02\x94\x13\x03\x02\x02\x02\x95\x96\b\v\x01" +
		"\x02\x96\x97\x07\b\x02\x02\x97\x98\x05\x14\v\x02\x98\x9F\x05\x12\n\x02" +
		"\x99\x9C\x07\t\x02\x02\x9A\x9B\x07\b\x02\x02\x9B\x9D\x05\x14\v\x02\x9C" +
		"\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E" +
		"\xA0\x05\x12\n\x02\x9F\x99\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0" +
		"\u011C\x03\x02\x02\x02\xA1\xB1\x07\n\x02\x02\xA2\xA7\x07Q\x02\x02\xA3" +
		"\xA5\x07!\x02\x02\xA4\xA6\x07Q\x02\x02\xA5\xA4\x03\x02\x02\x02\xA5\xA6" +
		"\x03\x02\x02\x02\xA6\xA8\x03\x02\x02\x02\xA7\xA3\x03\x02\x02\x02\xA7\xA8" +
		"\x03\x02\x02\x02\xA8\xAB\x03\x02\x02\x02\xA9\xAA\x07!\x02\x02\xAA\xAC" +
		"\x07Q\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAD" +
		"\x03\x02\x02\x02\xAD\xAF\x07\v\x02\x02\xAE\xA2\x03\x02\x02\x02\xAE\xAF" +
		"\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB2\x05\x14\v\x02\xB1\xAE" +
		"\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\u011C" +
		"\x05\x12\n\x02\xB4\xBA\x07\x12\x02\x02\xB5\xB8\x05\x14\v\x02\xB6\xB7\x07" +
		"\x10\x02\x02\xB7\xB9\x07Q\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03" +
		"\x02\x02\x02\xB9\xBB\x03\x02\x02\x02\xBA\xB5\x03\x02\x02\x02\xBA\xBB\x03" +
		"\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x07$\x02\x02\xBD\xBE\x07" +
		"\x14\x02\x02\xBE\xC4\x07\x03\x02\x02\xBF\xC0\x05\x14\v\x02\xC0\xC2\x05" +
		"\x12\n\x02\xC1\xC3\x07\x14\x02\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3\x03" +
		"\x02\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xBF\x03\x02\x02\x02\xC5\xC6\x03" +
		"\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC8\x03" +
		"\x02\x02\x02\xC8\xC9\x07\x04\x02\x02\xC9\u011C\x03\x02\x02\x02\xCA\xCB" +
		"\x07&\x02\x02\xCB\u011C\x07Q\x02\x02\xCC\xCD\x07H\x02\x02\xCD\u011C\x05" +
		"\x14\v\x1B\xCE\xCF\x07\'\x02\x02\xCF\u011C\x05\x14\v\x19\xD0\xD1\x07(" +
		"\x02\x02\xD1\u011C\x05\x14\v\x18\xD2\xD3\x07)\x02\x02\xD3\u011C\x05\x14" +
		"\v\x17\xD4\xD5\x07*\x02\x02\xD5\u011C\x05\x14\v\x16\xD6\u011C\x07Q\x02" +
		"\x02\xD7\u011C\x05\x16\f\x02\xD8\xDE\x07N\x02\x02\xD9\xDA\x05\x14\v\x02" +
		"\xDA\xDB\x07O\x02\x02\xDB\xDD\x03\x02\x02\x02\xDC\xD9\x03\x02\x02\x02" +
		"\xDD\xE0\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02" +
		"\xDF\xE1\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE1\xE2\x05\x14\v\x02" +
		"\xE2\xE3\x07P\x02\x02\xE3\u011C\x03\x02\x02\x02\xE4\xED\x07\x1B\x02\x02" +
		"\xE5\xEA\x05\x14\v\x02\xE6\xE7\x07!\x02\x02\xE7\xE9\x05\x14\v\x02\xE8" +
		"\xE6\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA" +
		"\xEB\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xED" +
		"\xE5\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF" +
		"\u011C\x07\x1C\x02\x02\xF0\xF1\x07\x1B\x02\x02\xF1\xF2\x05\x14\v\x02\xF2" +
		"\xF3\x07$\x02\x02\xF3\xF6\x05\x14\v\x02\xF4\xF5\x07$\x02\x02\xF5\xF7\x05" +
		"\x14\v\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\x03" +
		"\x02\x02\x02\xF8\xF9\x07\x1C\x02\x02\xF9\u011C\x03\x02\x02\x02\xFA\u0107" +
		"\x07\x1F\x02\x02\xFB\xFC\x07Q\x02\x02\xFC\xFD\x07$\x02\x02\xFD\u0104\x05" +
		"\x14\v\x02\xFE\xFF\x07!\x02\x02\xFF\u0100\x07Q\x02\x02\u0100\u0101\x07" +
		"$\x02\x02\u0101\u0103\x05\x14\v\x02\u0102\xFE\x03\x02\x02\x02\u0103\u0106" +
		"\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02" +
		"\u0105\u0108\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0107\xFB\x03" +
		"\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109" +
		"\u011C\x07 \x02\x02\u010A\u010B\x07\x1D\x02\x02\u010B\u010C\x05\x14\v" +
		"\x02\u010C\u010D\x07\x1E\x02\x02\u010D\u011C\x03\x02\x02\x02\u010E\u0118" +
		"\x07C\x02\x02\u010F\u0114\x07Q\x02\x02\u0110\u0111\x07!\x02\x02\u0111" +
		"\u0113\x07Q\x02\x02\u0112\u0110\x03\x02\x02\x02\u0113\u0116\x03\x02\x02" +
		"\x02\u0114\u0112\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0117" +
		"\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0117\u0119\x07$\x02\x02" +
		"\u0118\u010F\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011A\x03" +
		"\x02\x02\x02\u011A\u011C\x05\x14\v\x03\u011B\x95\x03\x02\x02\x02\u011B" +
		"\xA1\x03\x02\x02\x02\u011B\xB4\x03\x02\x02\x02\u011B\xCA\x03\x02\x02\x02" +
		"\u011B\xCC\x03\x02\x02\x02\u011B\xCE\x03\x02\x02\x02\u011B\xD0\x03\x02" +
		"\x02\x02\u011B\xD2\x03\x02\x02\x02\u011B\xD4\x03\x02\x02\x02\u011B\xD6" +
		"\x03\x02\x02\x02\u011B\xD7\x03\x02\x02\x02\u011B\xD8\x03\x02\x02\x02\u011B" +
		"\xE4\x03\x02\x02\x02\u011B\xF0\x03\x02\x02\x02\u011B\xFA\x03\x02\x02\x02" +
		"\u011B\u010A\x03\x02\x02\x02\u011B\u010E\x03\x02\x02\x02\u011C\u016C\x03" +
		"\x02\x02\x02\u011D\u011E\f\x1A\x02\x02\u011E\u011F\x07.\x02\x02\u011F" +
		"\u016B\x05\x14\v\x1B\u0120\u0121\f\x15\x02\x02\u0121\u0122\t\x03\x02\x02" +
		"\u0122\u016B\x05\x14\v\x16\u0123\u0124\f\x14\x02\x02\u0124\u0125\t\x04" +
		"\x02\x02\u0125\u016B\x05\x14\v\x15\u0126\u0127\f\x13\x02\x02\u0127\u0128" +
		"\t\x05\x02\x02\u0128\u016B\x05\x14\v\x14\u0129\u012A\f\x12\x02\x02\u012A" +
		"\u012B\t\x06\x02\x02\u012B\u016B\x05\x14\v\x13\u012C\u012D\f\x11\x02\x02" +
		"\u012D\u012E\t\x07\x02\x02\u012E\u016B\x05\x14\v\x12\u012F\u0130\f\x10" +
		"\x02\x02\u0130\u0131\x07\x15\x02\x02\u0131\u016B\x05\x14\v\x11\u0132\u0133" +
		"\f\x0F\x02\x02\u0133\u0134\x07\x17\x02\x02\u0134\u016B\x05\x14\v\x10\u0135" +
		"\u0136\f\x0E\x02\x02\u0136\u0137\x07\x16\x02\x02\u0137\u016B\x05\x14\v" +
		"\x0F\u0138\u0139\f\r\x02\x02\u0139\u013A\x076\x02\x02\u013A\u016B\x05" +
		"\x14\v\x0E\u013B\u013C\f\f\x02\x02\u013C\u013D\x077\x02\x02\u013D\u016B" +
		"\x05\x14\v\r\u013E\u013F\f\x04\x02\x02\u013F\u0142\x07D\x02\x02\u0140" +
		"\u0141\x07Q\x02\x02\u0141\u0143\x07$\x02\x02\u0142\u0140\x03\x02\x02\x02" +
		"\u0142\u0143\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u016B\x05" +
		"\x14\v\x05\u0145\u0146\f \x02\x02\u0146\u014F\x07\x1D\x02\x02\u0147\u014C" +
		"\x05\x14\v\x02\u0148\u0149\x07!\x02\x02\u0149\u014B\x05\x14\v\x02\u014A" +
		"\u0148\x03\x02\x02\x02\u014B\u014E\x03\x02\x02\x02\u014C\u014A\x03\x02" +
		"\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u0150\x03\x02\x02\x02\u014E" +
		"\u014C\x03\x02\x02\x02\u014F\u0147\x03\x02\x02\x02\u014F\u0150\x03\x02" +
		"\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u016B\x07\x1E\x02\x02\u0152" +
		"\u0153\f\x1F\x02\x02\u0153\u0154\x07\x1B\x02\x02\u0154\u0155\x05\x14\v" +
		"\x02\u0155\u0156\x07\x1C\x02\x02\u0156\u016B\x03\x02\x02\x02\u0157\u0158" +
		"\f\x1E\x02\x02\u0158\u0159\x07\x1B\x02\x02\u0159\u015A\x05\x14\v\x02\u015A" +
		"\u015C\x07$\x02\x02\u015B\u015D\x05\x14\v\x02\u015C\u015B\x03\x02\x02" +
		"\x02\u015C\u015D\x03\x02\x02\x02\u015D\u0160\x03\x02\x02\x02\u015E\u015F" +
		"\x07$\x02\x02\u015F\u0161\x05\x14\v\x02\u0160\u015E\x03\x02\x02\x02\u0160" +
		"\u0161\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0163\x07\x1C" +
		"\x02\x02\u0163\u016B\x03\x02\x02\x02\u0164\u0166\f\x1D\x02\x02\u0165\u0167" +
		"\x07#\x02\x02\u0166\u0165\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02" +
		"\u0167\u0168\x03\x02\x02\x02\u0168\u0169\x07&\x02\x02\u0169\u016B\x07" +
		"Q\x02\x02\u016A\u011D\x03\x02\x02\x02\u016A\u0120\x03\x02\x02\x02\u016A" +
		"\u0123\x03\x02\x02\x02\u016A\u0126\x03\x02\x02\x02\u016A\u0129\x03\x02" +
		"\x02\x02\u016A\u012C\x03\x02\x02\x02\u016A\u012F\x03\x02\x02\x02\u016A" +
		"\u0132\x03\x02\x02\x02\u016A\u0135\x03\x02\x02\x02\u016A\u0138\x03\x02" +
		"\x02\x02\u016A\u013B\x03\x02\x02\x02\u016A\u013E\x03\x02\x02\x02\u016A" +
		"\u0145\x03\x02\x02\x02\u016A\u0152\x03\x02\x02\x02\u016A\u0157\x03\x02" +
		"\x02\x02\u016A\u0164\x03\x02\x02\x02\u016B\u016E\x03\x02\x02\x02\u016C" +
		"\u016A\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\x15\x03\x02\x02" +
		"\x02\u016E\u016C\x03\x02\x02\x02\u016F\u0175\x07I\x02\x02\u0170\u0175" +
		"\x07J\x02\x02\u0171\u0175\x07K\x02\x02\u0172\u0175\x07L\x02\x02\u0173" +
		"\u0175\x07M\x02\x02\u0174\u016F\x03\x02\x02\x02\u0174\u0170\x03\x02\x02" +
		"\x02\u0174\u0171\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0174\u0173" +
		"\x03\x02\x02\x02\u0175\x17\x03\x02\x02\x023\x1A\x1C),17=FLPY\\cps|\x80" +
		"\x86\x8F\x93\x9C\x9F\xA5\xA7\xAB\xAE\xB1\xB8\xBA\xC2\xC6\xDE\xEA\xED\xF6" +
		"\u0104\u0107\u0114\u0118\u011B\u0142\u014C\u014F\u015C\u0160\u0166\u016A" +
		"\u016C\u0174";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_program; }
}


export class ImportsContext extends ParserRuleContext {
	public _alias: Token;
	public importPath(): ImportPathContext {
		return this.getRuleContext(0, ImportPathContext);
	}
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(XonParser.Multiply, 0); }
	public As(): TerminalNode | undefined { return this.tryGetToken(XonParser.As, 0); }
	public importMember(): ImportMemberContext[];
	public importMember(i: number): ImportMemberContext;
	public importMember(i?: number): ImportMemberContext | ImportMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportMemberContext);
		} else {
			return this.getRuleContext(i, ImportMemberContext);
		}
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_imports; }
}


export class ImportPathContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.StringLiteral);
		} else {
			return this.getToken(XonParser.StringLiteral, i);
		}
	}
	public Dot(): TerminalNode[];
	public Dot(i: number): TerminalNode;
	public Dot(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Dot);
		} else {
			return this.getToken(XonParser.Dot, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_importPath; }
}


export class ImportMemberContext extends ParserRuleContext {
	public _name: Token;
	public _alias: Token;
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(XonParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_importMember; }
}


export class DefinitionContext extends ParserRuleContext {
	public _name: Token;
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public member(): MemberContext[];
	public member(i: number): MemberContext;
	public member(i?: number): MemberContext | MemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberContext);
		} else {
			return this.getRuleContext(i, MemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definition; }
}


export class MemberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_member; }
	public copyFrom(ctx: MemberContext): void {
		super.copyFrom(ctx);
	}
}
export class PropertyMemberContext extends MemberContext {
	public _name: Token;
	public _type: Token;
	public _value: ExpressionContext;
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodMemberContext extends MemberContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DefinitionMemberContext extends MemberContext {
	public definition(): DefinitionContext {
		return this.getRuleContext(0, DefinitionContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PassMemberContext extends MemberContext {
	public Pass(): TerminalNode { return this.getToken(XonParser.Pass, 0); }
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LineBreakMemberContext extends MemberContext {
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class PreprocessorStatementContext extends StatementContext {
	public Preprocessor(): TerminalNode { return this.getToken(XonParser.Preprocessor, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssignmentStatementContext extends StatementContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public Assign(): TerminalNode { return this.getToken(XonParser.Assign, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FunctionStatementContext extends StatementContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PassStatementContext extends StatementContext {
	public Pass(): TerminalNode { return this.getToken(XonParser.Pass, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ContinueStatementContext extends StatementContext {
	public Continue(): TerminalNode { return this.getToken(XonParser.Continue, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BreakStatementContext extends StatementContext {
	public Break(): TerminalNode { return this.getToken(XonParser.Break, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ReturnStatementContext extends StatementContext {
	public Return(): TerminalNode { return this.getToken(XonParser.Return, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExpressionStatementContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LineBreakStatementContext extends StatementContext {
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ArgumentContext extends ParserRuleContext {
	public _name: Token;
	public _type: Token;
	public _value: ExpressionContext;
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(XonParser.Assign, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_argument; }
}


export class BodyContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public LineBreak(): TerminalNode | undefined { return this.tryGetToken(XonParser.LineBreak, 0); }
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DEDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_body; }
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IfExpressionContext extends ExpressionContext {
	public If(): TerminalNode[];
	public If(i: number): TerminalNode;
	public If(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.If);
		} else {
			return this.getToken(XonParser.If, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public body(): BodyContext[];
	public body(i: number): BodyContext;
	public body(i?: number): BodyContext | BodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BodyContext);
		} else {
			return this.getRuleContext(i, BodyContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(XonParser.Else, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LoopExpressionContext extends ExpressionContext {
	public _value: Token;
	public _key: Token;
	public _index: Token;
	public Loop(): TerminalNode { return this.getToken(XonParser.Loop, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public In(): TerminalNode | undefined { return this.tryGetToken(XonParser.In, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class SelectExpressionContext extends ExpressionContext {
	public _value: ExpressionContext;
	public _expression: ExpressionContext;
	public _cases: ExpressionContext[] = [];
	public Select(): TerminalNode { return this.getToken(XonParser.Select, 0); }
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public LineBreak(): TerminalNode[];
	public LineBreak(i: number): TerminalNode;
	public LineBreak(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.LineBreak);
		} else {
			return this.getToken(XonParser.LineBreak, i);
		}
	}
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public body(): BodyContext[];
	public body(i: number): BodyContext;
	public body(i?: number): BodyContext | BodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BodyContext);
		} else {
			return this.getRuleContext(i, BodyContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(XonParser.As, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FunctionExpressionContext extends ExpressionContext {
	public _object: ExpressionContext;
	public _expression: ExpressionContext;
	public _args: ExpressionContext[] = [];
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexExpressionContext extends ExpressionContext {
	public _value: ExpressionContext;
	public _index: ExpressionContext;
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class SliceExpressionContext extends ExpressionContext {
	public _value: ExpressionContext;
	public _startPos: ExpressionContext;
	public _endPos: ExpressionContext;
	public _step: ExpressionContext;
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Colon);
		} else {
			return this.getToken(XonParser.Colon, i);
		}
	}
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MemberExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Dot(): TerminalNode { return this.getToken(XonParser.Dot, 0); }
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(XonParser.QuestionMark, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InstanceMemberExpressionContext extends ExpressionContext {
	public Dot(): TerminalNode { return this.getToken(XonParser.Dot, 0); }
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class SpreadExpressionContext extends ExpressionContext {
	public Spread(): TerminalNode { return this.getToken(XonParser.Spread, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PowExpressionContext extends ExpressionContext {
	public _base: ExpressionContext;
	public _exponent: ExpressionContext;
	public Pow(): TerminalNode { return this.getToken(XonParser.Pow, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class UnaryPlusExpressionContext extends ExpressionContext {
	public Plus(): TerminalNode { return this.getToken(XonParser.Plus, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class UnaryMinusExpressionContext extends ExpressionContext {
	public Minus(): TerminalNode { return this.getToken(XonParser.Minus, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitNotExpressionContext extends ExpressionContext {
	public BitNot(): TerminalNode { return this.getToken(XonParser.BitNot, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LogicalNotExpressionContext extends ExpressionContext {
	public Not(): TerminalNode { return this.getToken(XonParser.Not, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MulDivModExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operation: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(XonParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(XonParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Modulus, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AddSubExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operation: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Minus, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitShiftExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operation: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LeftShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(XonParser.LeftShiftArithmetic, 0); }
	public RightShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(XonParser.RightShiftArithmetic, 0); }
	public RightShiftLogical(): TerminalNode | undefined { return this.tryGetToken(XonParser.RightShiftLogical, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RelationalExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operation: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.LessThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(XonParser.LessThanEquals, 0); }
	public MoreThanEquals(): TerminalNode | undefined { return this.tryGetToken(XonParser.MoreThanEquals, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.MoreThan, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class EqualityExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _operation: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Equals(): TerminalNode | undefined { return this.tryGetToken(XonParser.Equals, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(XonParser.NotEquals, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitAndExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public BitAnd(): TerminalNode { return this.getToken(XonParser.BitAnd, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitXorExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public BitXor(): TerminalNode { return this.getToken(XonParser.BitXor, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitOrExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public BitOr(): TerminalNode { return this.getToken(XonParser.BitOr, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LogicalAndExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public And(): TerminalNode { return this.getToken(XonParser.And, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LogicalOrExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public Or(): TerminalNode { return this.getToken(XonParser.Or, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IdExpressionContext extends ExpressionContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LiteralExpressionContext extends ExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StringFormatExpressionContext extends ExpressionContext {
	public StringFormatStart(): TerminalNode { return this.getToken(XonParser.StringFormatStart, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public StringFormatEnd(): TerminalNode { return this.getToken(XonParser.StringFormatEnd, 0); }
	public StringFormatMiddle(): TerminalNode[];
	public StringFormatMiddle(i: number): TerminalNode;
	public StringFormatMiddle(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.StringFormatMiddle);
		} else {
			return this.getToken(XonParser.StringFormatMiddle, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public _expression: ExpressionContext;
	public _items: ExpressionContext[] = [];
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RangeExpressionContext extends ExpressionContext {
	public _startPos: ExpressionContext;
	public _end: ExpressionContext;
	public _step: ExpressionContext;
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Colon);
		} else {
			return this.getToken(XonParser.Colon, i);
		}
	}
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectExpressionContext extends ExpressionContext {
	public OpenBrace(): TerminalNode { return this.getToken(XonParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(XonParser.CloseBrace, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Colon);
		} else {
			return this.getToken(XonParser.Colon, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ParenthesizedExpressionContext extends ExpressionContext {
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PipeExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _right: ExpressionContext;
	public Pipe(): TerminalNode { return this.getToken(XonParser.Pipe, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LambdaExpressionContext extends ExpressionContext {
	public LambdaStart(): TerminalNode { return this.getToken(XonParser.LambdaStart, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class NullLiteralContext extends LiteralContext {
	public NullLiteral(): TerminalNode { return this.getToken(XonParser.NullLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BooleanLiteralContext extends LiteralContext {
	public BooleanLiteral(): TerminalNode { return this.getToken(XonParser.BooleanLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DecimalLiteralContext extends LiteralContext {
	public DecimalLiteral(): TerminalNode { return this.getToken(XonParser.DecimalLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FloatLiteralContext extends LiteralContext {
	public FloatLiteral(): TerminalNode { return this.getToken(XonParser.FloatLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StringLiteralContext extends LiteralContext {
	public StringLiteral(): TerminalNode { return this.getToken(XonParser.StringLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


