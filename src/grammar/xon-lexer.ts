// Generated from XonLexer.g4 by ANTLR 4.9.0-SNAPSHOT

 
// @ts-nocheck
import { XonLexerBase } from "./xon-lexer-base";


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class XonLexer extends XonLexerBase {
	public static readonly INDENT = 1;
	public static readonly DEDENT = 2;
	public static readonly Prefix = 3;
	public static readonly Postfix = 4;
	public static readonly Infix = 5;
	public static readonly Is = 6;
	public static readonly As = 7;
	public static readonly If = 8;
	public static readonly Else = 9;
	public static readonly ElseIf = 10;
	public static readonly Loop = 11;
	public static readonly In = 12;
	public static readonly Break = 13;
	public static readonly Return = 14;
	public static readonly Preprocessor = 15;
	public static readonly LineBreak = 16;
	public static readonly OpenBracket = 17;
	public static readonly CloseBracket = 18;
	public static readonly OpenParen = 19;
	public static readonly CloseParen = 20;
	public static readonly OpenBrace = 21;
	public static readonly CloseBrace = 22;
	public static readonly Comma = 23;
	public static readonly Assign = 24;
	public static readonly Question = 25;
	public static readonly Colon = 26;
	public static readonly Dot = 27;
	public static readonly Plus = 28;
	public static readonly Minus = 29;
	public static readonly Exclamation = 30;
	public static readonly Asterisk = 31;
	public static readonly Slash = 32;
	public static readonly Modulo = 33;
	public static readonly Caret = 34;
	public static readonly Hash = 35;
	public static readonly LessThan = 36;
	public static readonly MoreThan = 37;
	public static readonly Ampersand = 38;
	public static readonly Pipe = 39;
	public static readonly Tilde = 40;
	public static readonly Ad = 41;
	public static readonly LambdaStart = 42;
	public static readonly BooleanLiteral = 43;
	public static readonly FloatLiteral = 44;
	public static readonly IntegerLiteral = 45;
	public static readonly CharLiteral = 46;
	public static readonly StringLiteral = 47;
	public static readonly StringFormatStart = 48;
	public static readonly StringFormatMiddle = 49;
	public static readonly StringFormatEnd = 50;
	public static readonly ID = 51;
	public static readonly Spaces = 52;
	public static readonly Comment = 53;
	public static readonly LineJoining = 54;
	public static readonly UnexpectedCharacter = 55;
	public static readonly ERROR = 2;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN", "ERROR",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"Prefix", "Postfix", "Infix", "Is", "As", "If", "Else", "ElseIf", "Loop", 
		"In", "Break", "Return", "Preprocessor", "LineBreak", "OpenBracket", "CloseBracket", 
		"OpenParen", "CloseParen", "OpenBrace", "CloseBrace", "Comma", "Assign", 
		"Question", "Colon", "Dot", "Plus", "Minus", "Exclamation", "Asterisk", 
		"Slash", "Modulo", "Caret", "Hash", "LessThan", "MoreThan", "Ampersand", 
		"Pipe", "Tilde", "Ad", "LambdaStart", "BooleanLiteral", "FloatLiteral", 
		"IntegerLiteral", "CharLiteral", "StringLiteral", "StringFormatStart", 
		"StringFormatMiddle", "StringFormatEnd", "ID", "Spaces", "Comment", "LineJoining", 
		"UnexpectedCharacter", "SPACES", "DIGIT_NUMBER", "ALPHABET_NUMBER", "STRING_CHARACTER",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'prefix'", "'postfix'", "'infix'", "'is'", 
		"'as'", "'if'", "'else'", "'elif'", "'loop'", "'in'", "'break'", "'return'", 
		undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", "','", 
		"'='", "'?'", "':'", "'.'", "'+'", "'-'", "'!'", "'*'", "'/'", "'%'", 
		"'^'", "'#'", "'<'", "'>'", "'&'", "'|'", "'~'", "'@'", "'\\'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "Prefix", "Postfix", "Infix", "Is", "As", 
		"If", "Else", "ElseIf", "Loop", "In", "Break", "Return", "Preprocessor", 
		"LineBreak", "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", 
		"OpenBrace", "CloseBrace", "Comma", "Assign", "Question", "Colon", "Dot", 
		"Plus", "Minus", "Exclamation", "Asterisk", "Slash", "Modulo", "Caret", 
		"Hash", "LessThan", "MoreThan", "Ampersand", "Pipe", "Tilde", "Ad", "LambdaStart", 
		"BooleanLiteral", "FloatLiteral", "IntegerLiteral", "CharLiteral", "StringLiteral", 
		"StringFormatStart", "StringFormatMiddle", "StringFormatEnd", "ID", "Spaces", 
		"Comment", "LineJoining", "UnexpectedCharacter",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XonLexer._LITERAL_NAMES, XonLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return XonLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(XonLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "XonLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return XonLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return XonLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return XonLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return XonLexer.modeNames; }

	// @Override
	public action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 13:
			this.LineBreak_action(_localctx, actionIndex);
			break;

		case 14:
			this.OpenBracket_action(_localctx, actionIndex);
			break;

		case 15:
			this.CloseBracket_action(_localctx, actionIndex);
			break;

		case 16:
			this.OpenParen_action(_localctx, actionIndex);
			break;

		case 17:
			this.CloseParen_action(_localctx, actionIndex);
			break;

		case 18:
			this.OpenBrace_action(_localctx, actionIndex);
			break;

		case 19:
			this.CloseBrace_action(_localctx, actionIndex);
			break;
		}
	}
	private LineBreak_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			this.handleLineBreak()
			break;
		}
	}
	private OpenBracket_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 1:
			this.opened++;
			break;
		}
	}
	private CloseBracket_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 2:
			this.opened--;
			break;
		}
	}
	private OpenParen_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 3:
			this.opened++;
			break;
		}
	}
	private CloseParen_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 4:
			this.opened--;
			break;
		}
	}
	private OpenBrace_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 5:
			this.opened++;
			break;
		}
	}
	private CloseBrace_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 6:
			this.opened--;
			break;
		}
	}
	// @Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 13:
			return this.LineBreak_sempred(_localctx, predIndex);
		}
		return true;
	}
	private LineBreak_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.atStartOfInput();
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x029\u01A1\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x07\x0E\xB7\n\x0E\f\x0E\x0E\x0E\xBA\v\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xC1\n\x0F\x03\x0F\x03\x0F\x05\x0F\xC5" +
		"\n\x0F\x03\x0F\x05\x0F\xC8\n\x0F\x05\x0F\xCA\n\x0F\x03\x0F\x03\x0F\x03" +
		"\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03" +
		"\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%" +
		"\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03*\x03*\x03" +
		"*\x03*\x03*\x03*\x03*\x05*\u0111\n*\x03+\x03+\x05+\u0115\n+\x03+\x03+" +
		"\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u0120\n+\x03,\x03,\x05,\u0124" +
		"\n,\x03,\x03,\x03,\x05,\u0129\n,\x03-\x03-\x03-\x03-\x03.\x03.\x07.\u0131" +
		"\n.\f.\x0E.\u0134\v.\x03.\x03.\x03/\x03/\x07/\u013A\n/\f/\x0E/\u013D\v" +
		"/\x03/\x03/\x030\x030\x070\u0143\n0\f0\x0E0\u0146\v0\x030\x030\x031\x03" +
		"1\x071\u014C\n1\f1\x0E1\u014F\v1\x031\x031\x032\x032\x072\u0155\n2\f2" +
		"\x0E2\u0158\v2\x033\x033\x033\x033\x034\x034\x034\x034\x074\u0162\n4\f" +
		"4\x0E4\u0165\v4\x034\x034\x035\x035\x035\x055\u016C\n5\x035\x035\x055" +
		"\u0170\n5\x035\x035\x036\x036\x036\x036\x037\x067\u0179\n7\r7\x0E7\u017A" +
		"\x038\x068\u017E\n8\r8\x0E8\u017F\x038\x038\x068\u0184\n8\r8\x0E8\u0185" +
		"\x078\u0188\n8\f8\x0E8\u018B\v8\x039\x069\u018E\n9\r9\x0E9\u018F\x039" +
		"\x039\x069\u0194\n9\r9\x0E9\u0195\x079\u0198\n9\f9\x0E9\u019B\v9\x03:" +
		"\x03:\x03:\x05:\u01A0\n:\x03\xB8\x02\x02;\x03\x02\x05\x05\x02\x06\x07" +
		"\x02\x07\t\x02\b\v\x02\t\r\x02\n\x0F\x02\v\x11\x02\f\x13\x02\r\x15\x02" +
		"\x0E\x17\x02\x0F\x19\x02\x10\x1B\x02\x11\x1D\x02\x12\x1F\x02\x13!\x02" +
		"\x14#\x02\x15%\x02\x16\'\x02\x17)\x02\x18+\x02\x19-\x02\x1A/\x02\x1B1" +
		"\x02\x1C3\x02\x1D5\x02\x1E7\x02\x1F9\x02 ;\x02!=\x02\"?\x02#A\x02$C\x02" +
		"%E\x02&G\x02\'I\x02(K\x02)M\x02*O\x02+Q\x02,S\x02-U\x02.W\x02/Y\x020[" +
		"\x021]\x022_\x023a\x024c\x025e\x026g\x027i\x028k\x029m\x02\x02o\x02\x02" +
		"q\x02\x02s\x02\x02\x03\x02\f\x03\x022;\x04\x02ZZzz\x03\x02))\x05\x02C" +
		"\\aac|\x06\x022;C\\aac|\x04\x02\f\f\x0F\x0F\x04\x02\v\v\"\"\x05\x022;" +
		"C\\c|\x04\x02$$}}\v\x02$$^^ddhhppttvvxx}}\x02\u01B7\x02\x03\x03\x02\x02" +
		"\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
		"\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02" +
		"\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02" +
		"\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02" +
		"\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02" +
		"\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)" +
		"\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02" +
		"\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02" +
		"\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03" +
		"\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02" +
		"\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02" +
		"K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02" +
		"\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02" +
		"\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03" +
		"\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02" +
		"\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x03" +
		"u\x03\x02\x02\x02\x05|\x03\x02\x02\x02\x07\x84\x03\x02\x02\x02\t\x8A\x03" +
		"\x02\x02\x02\v\x8D\x03\x02\x02\x02\r\x90\x03\x02\x02\x02\x0F\x93\x03\x02" +
		"\x02\x02\x11\x98\x03\x02\x02\x02\x13\x9D\x03\x02\x02\x02\x15\xA2\x03\x02" +
		"\x02\x02\x17\xA5\x03\x02\x02\x02\x19\xAB\x03\x02\x02\x02\x1B\xB2\x03\x02" +
		"\x02\x02\x1D\xC9\x03\x02\x02\x02\x1F\xCD\x03\x02\x02\x02!\xD0\x03\x02" +
		"\x02\x02#\xD3\x03\x02\x02\x02%\xD6\x03\x02\x02\x02\'\xD9\x03\x02\x02\x02" +
		")\xDC\x03\x02\x02\x02+\xDF\x03\x02\x02\x02-\xE1\x03\x02\x02\x02/\xE3\x03" +
		"\x02\x02\x021\xE5\x03\x02\x02\x023\xE7\x03\x02\x02\x025\xE9\x03\x02\x02" +
		"\x027\xEB\x03\x02\x02\x029\xED\x03\x02\x02\x02;\xEF\x03\x02\x02\x02=\xF1" +
		"\x03\x02\x02\x02?\xF3\x03\x02\x02\x02A\xF5\x03\x02\x02\x02C\xF7\x03\x02" +
		"\x02\x02E\xF9\x03\x02\x02\x02G\xFB\x03\x02\x02\x02I\xFD\x03\x02\x02\x02" +
		"K\xFF\x03\x02\x02\x02M\u0101\x03\x02\x02\x02O\u0103\x03\x02\x02\x02Q\u0105" +
		"\x03\x02\x02\x02S\u0110\x03\x02\x02\x02U\u011F\x03\x02\x02\x02W\u0128" +
		"\x03\x02\x02\x02Y\u012A\x03\x02\x02\x02[\u012E\x03\x02\x02\x02]\u0137" +
		"\x03\x02\x02\x02_\u0140\x03\x02\x02\x02a\u0149\x03\x02\x02\x02c\u0152" +
		"\x03\x02\x02\x02e\u0159\x03\x02\x02\x02g\u015D\x03\x02\x02\x02i\u0168" +
		"\x03\x02\x02\x02k\u0173\x03\x02\x02\x02m\u0178\x03\x02\x02\x02o\u017D" +
		"\x03\x02\x02\x02q\u018D\x03\x02\x02\x02s\u019F\x03\x02\x02\x02uv\x07r" +
		"\x02\x02vw\x07t\x02\x02wx\x07g\x02\x02xy\x07h\x02\x02yz\x07k\x02\x02z" +
		"{\x07z\x02\x02{\x04\x03\x02\x02\x02|}\x07r\x02\x02}~\x07q\x02\x02~\x7F" +
		"\x07u\x02\x02\x7F\x80\x07v\x02\x02\x80\x81\x07h\x02\x02\x81\x82\x07k\x02" +
		"\x02\x82\x83\x07z\x02\x02\x83\x06\x03\x02\x02\x02\x84\x85\x07k\x02\x02" +
		"\x85\x86\x07p\x02\x02\x86\x87\x07h\x02\x02\x87\x88\x07k\x02\x02\x88\x89" +
		"\x07z\x02\x02\x89\b\x03\x02\x02\x02\x8A\x8B\x07k\x02\x02\x8B\x8C\x07u" +
		"\x02\x02\x8C\n\x03\x02\x02\x02\x8D\x8E\x07c\x02\x02\x8E\x8F\x07u\x02\x02" +
		"\x8F\f\x03\x02\x02\x02\x90\x91\x07k\x02\x02\x91\x92\x07h\x02\x02\x92\x0E" +
		"\x03\x02\x02\x02\x93\x94\x07g\x02\x02\x94\x95\x07n\x02\x02\x95\x96\x07" +
		"u\x02\x02\x96\x97\x07g\x02\x02\x97\x10\x03\x02\x02\x02\x98\x99\x07g\x02" +
		"\x02\x99\x9A\x07n\x02\x02\x9A\x9B\x07k\x02\x02\x9B\x9C\x07h\x02\x02\x9C" +
		"\x12\x03\x02\x02\x02\x9D\x9E\x07n\x02\x02\x9E\x9F\x07q\x02\x02\x9F\xA0" +
		"\x07q\x02\x02\xA0\xA1\x07r\x02\x02\xA1\x14\x03\x02\x02\x02\xA2\xA3\x07" +
		"k\x02\x02\xA3\xA4\x07p\x02\x02\xA4\x16\x03\x02\x02\x02\xA5\xA6\x07d\x02" +
		"\x02\xA6\xA7\x07t\x02\x02\xA7\xA8\x07g\x02\x02\xA8\xA9\x07c\x02\x02\xA9" +
		"\xAA\x07m\x02\x02\xAA\x18\x03\x02\x02\x02\xAB\xAC\x07t\x02\x02\xAC\xAD" +
		"\x07g\x02\x02\xAD\xAE\x07v\x02\x02\xAE\xAF\x07w\x02\x02\xAF\xB0\x07t\x02" +
		"\x02\xB0\xB1\x07p\x02\x02\xB1\x1A\x03\x02\x02\x02\xB2\xB3\x07%\x02\x02" +
		"\xB3\xB4\x07}\x02\x02\xB4\xB8\x03\x02\x02\x02\xB5\xB7\v\x02\x02\x02\xB6" +
		"\xB5\x03\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB8" +
		"\xB6\x03\x02\x02\x02\xB9\xBB\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB" +
		"\xBC\x07\x7F\x02\x02\xBC\x1C\x03\x02\x02\x02\xBD\xBE\x06\x0F\x02\x02\xBE" +
		"\xCA\x05m7\x02\xBF\xC1\x07\x0F\x02\x02\xC0\xBF\x03\x02\x02\x02\xC0\xC1" +
		"\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC5\x07\f\x02\x02\xC3\xC5" +
		"\x07\x0F\x02\x02\xC4\xC0\x03\x02\x02\x02\xC4\xC3\x03\x02\x02\x02\xC5\xC7" +
		"\x03\x02\x02\x02\xC6\xC8\x05m7\x02\xC7\xC6\x03\x02\x02\x02\xC7\xC8\x03" +
		"\x02\x02\x02\xC8\xCA\x03\x02\x02\x02\xC9\xBD\x03\x02\x02\x02\xC9\xC4\x03" +
		"\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCC\b\x0F\x02\x02\xCC\x1E\x03" +
		"\x02\x02\x02\xCD\xCE\x07]\x02\x02\xCE\xCF\b\x10\x03\x02\xCF \x03\x02\x02" +
		"\x02\xD0\xD1\x07_\x02\x02\xD1\xD2\b\x11\x04\x02\xD2\"\x03\x02\x02\x02" +
		"\xD3\xD4\x07*\x02\x02\xD4\xD5\b\x12\x05\x02\xD5$\x03\x02\x02\x02\xD6\xD7" +
		"\x07+\x02\x02\xD7\xD8\b\x13\x06\x02\xD8&\x03\x02\x02\x02\xD9\xDA\x07}" +
		"\x02\x02\xDA\xDB\b\x14\x07\x02\xDB(\x03\x02\x02\x02\xDC\xDD\x07\x7F\x02" +
		"\x02\xDD\xDE\b\x15\b\x02\xDE*\x03\x02\x02\x02\xDF\xE0\x07.\x02\x02\xE0" +
		",\x03\x02\x02\x02\xE1\xE2\x07?\x02\x02\xE2.\x03\x02\x02\x02\xE3\xE4\x07" +
		"A\x02\x02\xE40\x03\x02\x02\x02\xE5\xE6\x07<\x02\x02\xE62\x03\x02\x02\x02" +
		"\xE7\xE8\x070\x02\x02\xE84\x03\x02\x02\x02\xE9\xEA\x07-\x02\x02\xEA6\x03" +
		"\x02\x02\x02\xEB\xEC\x07/\x02\x02\xEC8\x03\x02\x02\x02\xED\xEE\x07#\x02" +
		"\x02\xEE:\x03\x02\x02\x02\xEF\xF0\x07,\x02\x02\xF0<\x03\x02\x02\x02\xF1" +
		"\xF2\x071\x02\x02\xF2>\x03\x02\x02\x02\xF3\xF4\x07\'\x02\x02\xF4@\x03" +
		"\x02\x02\x02\xF5\xF6\x07`\x02\x02\xF6B\x03\x02\x02\x02\xF7\xF8\x07%\x02" +
		"\x02\xF8D\x03\x02\x02\x02\xF9\xFA\x07>\x02\x02\xFAF\x03\x02\x02\x02\xFB" +
		"\xFC\x07@\x02\x02\xFCH\x03\x02\x02\x02\xFD\xFE\x07(\x02\x02\xFEJ\x03\x02" +
		"\x02\x02\xFF\u0100\x07~\x02\x02\u0100L\x03\x02\x02\x02\u0101\u0102\x07" +
		"\x80\x02\x02\u0102N\x03\x02\x02\x02\u0103\u0104\x07B\x02\x02\u0104P\x03" +
		"\x02\x02\x02\u0105\u0106\x07^\x02\x02\u0106R\x03\x02\x02\x02\u0107\u0108" +
		"\x07v\x02\x02\u0108\u0109\x07t\x02\x02\u0109\u010A\x07w\x02\x02\u010A" +
		"\u0111\x07g\x02\x02\u010B\u010C\x07h\x02\x02\u010C\u010D\x07c\x02\x02" +
		"\u010D\u010E\x07n\x02\x02\u010E\u010F\x07u\x02\x02\u010F\u0111\x07g\x02" +
		"\x02\u0110\u0107\x03\x02\x02\x02\u0110\u010B\x03\x02\x02\x02\u0111T\x03" +
		"\x02\x02\x02\u0112\u0114\t\x02\x02\x02\u0113\u0115\t\x02\x02\x02\u0114" +
		"\u0113\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x03\x02" +
		"\x02\x02\u0116\u0117\t\x03\x02\x02\u0117\u0118\x05q9\x02\u0118\u0119\x07" +
		"0\x02\x02\u0119\u011A\x05q9\x02\u011A\u0120\x03\x02\x02\x02\u011B\u011C" +
		"\x05o8\x02\u011C\u011D\x070\x02\x02\u011D\u011E\x05o8\x02\u011E\u0120" +
		"\x03\x02\x02\x02\u011F\u0112\x03\x02\x02\x02\u011F\u011B\x03\x02\x02\x02" +
		"\u0120V\x03\x02\x02\x02\u0121\u0123\t\x02\x02\x02\u0122\u0124\t\x02\x02" +
		"\x02\u0123\u0122\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0125" +
		"\x03\x02\x02\x02\u0125\u0126\t\x03\x02\x02\u0126\u0129\x05q9\x02\u0127" +
		"\u0129\x05o8\x02\u0128\u0121\x03\x02\x02\x02\u0128\u0127\x03\x02\x02\x02" +
		"\u0129X\x03\x02\x02\x02\u012A\u012B\x07)\x02\x02\u012B\u012C\n\x04\x02" +
		"\x02\u012C\u012D\x07)\x02\x02\u012DZ\x03\x02\x02\x02\u012E\u0132\x07$" +
		"\x02\x02\u012F\u0131\x05s:\x02\u0130\u012F\x03\x02\x02\x02\u0131\u0134" +
		"\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02" +
		"\u0133\u0135\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0135\u0136\x07" +
		"$\x02\x02\u0136\\\x03\x02\x02\x02\u0137\u013B\x07$\x02\x02\u0138\u013A" +
		"\x05s:\x02\u0139\u0138\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02\u013B" +
		"\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013E\x03\x02" +
		"\x02\x02\u013D\u013B\x03\x02\x02\x02\u013E\u013F\x07}\x02\x02\u013F^\x03" +
		"\x02\x02\x02\u0140\u0144\x07\x7F\x02\x02\u0141\u0143\x05s:\x02\u0142\u0141" +
		"\x03\x02\x02\x02\u0143\u0146\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02" +
		"\u0144\u0145\x03\x02\x02\x02\u0145\u0147\x03\x02\x02\x02\u0146\u0144\x03" +
		"\x02\x02\x02\u0147\u0148\x07}\x02\x02\u0148`\x03\x02\x02\x02\u0149\u014D" +
		"\x07\x7F\x02\x02\u014A\u014C\x05s:\x02\u014B\u014A\x03\x02\x02\x02\u014C" +
		"\u014F\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014D\u014E\x03\x02" +
		"\x02\x02\u014E\u0150\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u0150" +
		"\u0151\x07$\x02\x02\u0151b\x03\x02\x02\x02\u0152\u0156\t\x05\x02\x02\u0153" +
		"\u0155\t\x06\x02\x02\u0154\u0153\x03\x02\x02\x02\u0155\u0158\x03\x02\x02" +
		"\x02\u0156\u0154\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157d\x03" +
		"\x02\x02\x02\u0158\u0156\x03\x02\x02\x02\u0159\u015A\x05m7\x02\u015A\u015B" +
		"\x03\x02\x02\x02\u015B\u015C\b3\t\x02\u015Cf\x03\x02\x02\x02\u015D\u015E" +
		"\x071\x02\x02\u015E\u015F\x071\x02\x02\u015F\u0163\x03\x02\x02\x02\u0160" +
		"\u0162\n\x07\x02\x02\u0161\u0160\x03\x02\x02\x02\u0162\u0165\x03\x02\x02" +
		"\x02\u0163\u0161\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0166" +
		"\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0166\u0167\b4\t\x02\u0167" +
		"h\x03\x02\x02\x02\u0168\u0169\x07^\x02\x02\u0169\u016F\x05m7\x02\u016A" +
		"\u016C\x07\x0F\x02\x02\u016B\u016A\x03\x02\x02\x02\u016B\u016C\x03\x02" +
		"\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u0170\x07\f\x02\x02\u016E\u0170" +
		"\x07\x0F\x02\x02\u016F\u016B\x03\x02\x02\x02\u016F\u016E\x03\x02\x02\x02" +
		"\u0170\u0171\x03\x02\x02\x02\u0171\u0172\b5\t\x02\u0172j\x03\x02\x02\x02" +
		"\u0173\u0174\v\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0176\b6" +
		"\n\x02\u0176l\x03\x02\x02\x02\u0177\u0179\t\b\x02\x02\u0178\u0177\x03" +
		"\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u0178\x03\x02\x02\x02\u017A" +
		"\u017B\x03\x02\x02\x02\u017Bn\x03\x02\x02\x02\u017C\u017E\t\x02\x02\x02" +
		"\u017D\u017C\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u017D\x03" +
		"\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0189\x03\x02\x02\x02\u0181" +
		"\u0188\x07a\x02\x02\u0182\u0184\t\x02\x02\x02\u0183\u0182\x03\x02\x02" +
		"\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0183\x03\x02\x02\x02\u0185\u0186" +
		"\x03\x02\x02\x02\u0186\u0188\x03\x02\x02\x02\u0187\u0181\x03\x02\x02\x02" +
		"\u0187\u0183\x03\x02\x02\x02\u0188\u018B\x03\x02\x02\x02\u0189\u0187\x03" +
		"\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018Ap\x03\x02\x02\x02\u018B" +
		"\u0189\x03\x02\x02\x02\u018C\u018E\t\t\x02\x02\u018D\u018C\x03\x02\x02" +
		"\x02\u018E\u018F\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u018F\u0190" +
		"\x03\x02\x02\x02\u0190\u0199\x03\x02\x02\x02\u0191\u0193\x07a\x02\x02" +
		"\u0192\u0194\t\t\x02\x02\u0193\u0192\x03\x02\x02\x02\u0194\u0195\x03\x02" +
		"\x02\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196" +
		"\u0198\x03\x02\x02\x02\u0197\u0191\x03\x02\x02\x02\u0198\u019B\x03\x02" +
		"\x02\x02\u0199\u0197\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A" +
		"r\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019C\u01A0\n\n\x02\x02" +
		"\u019D\u019E\x07^\x02\x02\u019E\u01A0\t\v\x02\x02\u019F\u019C\x03\x02" +
		"\x02\x02\u019F\u019D\x03\x02\x02\x02\u01A0t\x03\x02\x02\x02\x1E\x02\xB8" +
		"\xC0\xC4\xC7\xC9\u0110\u0114\u011F\u0123\u0128\u0132\u013B\u0144\u014D" +
		"\u0156\u0163\u016B\u016F\u017A\u017F\u0185\u0187\u0189\u018F\u0195\u0199" +
		"\u019F\v\x03\x0F\x02\x03\x10\x03\x03\x11\x04\x03\x12\x05\x03\x13\x06\x03" +
		"\x14\x07\x03\x15\b\b\x02\x02\x02\x04\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonLexer.__ATN) {
			XonLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonLexer._serializedATN));
		}

		return XonLexer.__ATN;
	}

}

