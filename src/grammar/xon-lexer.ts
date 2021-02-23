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
	public static readonly LambdaStart = 41;
	public static readonly BooleanLiteral = 42;
	public static readonly FloatLiteral = 43;
	public static readonly IntegerLiteral = 44;
	public static readonly CharLiteral = 45;
	public static readonly StringLiteral = 46;
	public static readonly StringFormatStart = 47;
	public static readonly StringFormatMiddle = 48;
	public static readonly StringFormatEnd = 49;
	public static readonly ID = 50;
	public static readonly Spaces = 51;
	public static readonly Comment = 52;
	public static readonly LineJoining = 53;
	public static readonly UnexpectedCharacter = 54;
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
		"Pipe", "Tilde", "LambdaStart", "BooleanLiteral", "FloatLiteral", "IntegerLiteral", 
		"CharLiteral", "StringLiteral", "StringFormatStart", "StringFormatMiddle", 
		"StringFormatEnd", "ID", "Spaces", "Comment", "LineJoining", "UnexpectedCharacter", 
		"SPACES", "DIGIT_NUMBER", "ALPHABET_NUMBER", "STRING_CHARACTER",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'prefix'", "'postfix'", "'infix'", "'is'", 
		"'as'", "'if'", "'else'", "'elif'", "'loop'", "'in'", "'break'", "'return'", 
		undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", "','", 
		"'='", "'?'", "':'", "'.'", "'+'", "'-'", "'!'", "'*'", "'/'", "'%'", 
		"'^'", "'#'", "'<'", "'>'", "'&'", "'|'", "'~'", "'\\'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "Prefix", "Postfix", "Infix", "Is", "As", 
		"If", "Else", "ElseIf", "Loop", "In", "Break", "Return", "Preprocessor", 
		"LineBreak", "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", 
		"OpenBrace", "CloseBrace", "Comma", "Assign", "Question", "Colon", "Dot", 
		"Plus", "Minus", "Exclamation", "Asterisk", "Slash", "Modulo", "Caret", 
		"Hash", "LessThan", "MoreThan", "Ampersand", "Pipe", "Tilde", "LambdaStart", 
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x028\u019B\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x07\x0E\xB5\n\x0E\f\x0E\x0E\x0E\xB8\v\x0E\x03\x0E\x03\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F\xBF\n\x0F\x03\x0F\x03\x0F\x05\x0F\xC3\n\x0F\x03\x0F" +
		"\x05\x0F\xC6\n\x0F\x05\x0F\xC8\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03" +
		"\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
		" \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03" +
		"\'\x03\'\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u010D" +
		"\n)\x03*\x03*\x05*\u0111\n*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03" +
		"*\x05*\u011C\n*\x03+\x03+\x05+\u0120\n+\x03+\x03+\x03+\x05+\u0125\n+\x03" +
		",\x03,\x03,\x03,\x03-\x03-\x07-\u012D\n-\f-\x0E-\u0130\v-\x03-\x03-\x03" +
		".\x03.\x07.\u0136\n.\f.\x0E.\u0139\v.\x03.\x03.\x03/\x03/\x07/\u013F\n" +
		"/\f/\x0E/\u0142\v/\x03/\x03/\x030\x030\x070\u0148\n0\f0\x0E0\u014B\v0" +
		"\x030\x030\x031\x031\x071\u0151\n1\f1\x0E1\u0154\v1\x032\x032\x032\x03" +
		"2\x033\x033\x033\x033\x073\u015E\n3\f3\x0E3\u0161\v3\x034\x034\x034\x05" +
		"4\u0166\n4\x034\x034\x054\u016A\n4\x034\x034\x035\x035\x035\x035\x036" +
		"\x066\u0173\n6\r6\x0E6\u0174\x037\x067\u0178\n7\r7\x0E7\u0179\x037\x03" +
		"7\x067\u017E\n7\r7\x0E7\u017F\x077\u0182\n7\f7\x0E7\u0185\v7\x038\x06" +
		"8\u0188\n8\r8\x0E8\u0189\x038\x038\x068\u018E\n8\r8\x0E8\u018F\x078\u0192" +
		"\n8\f8\x0E8\u0195\v8\x039\x039\x039\x059\u019A\n9\x03\xB6\x02\x02:\x03" +
		"\x02\x05\x05\x02\x06\x07\x02\x07\t\x02\b\v\x02\t\r\x02\n\x0F\x02\v\x11" +
		"\x02\f\x13\x02\r\x15\x02\x0E\x17\x02\x0F\x19\x02\x10\x1B\x02\x11\x1D\x02" +
		"\x12\x1F\x02\x13!\x02\x14#\x02\x15%\x02\x16\'\x02\x17)\x02\x18+\x02\x19" +
		"-\x02\x1A/\x02\x1B1\x02\x1C3\x02\x1D5\x02\x1E7\x02\x1F9\x02 ;\x02!=\x02" +
		"\"?\x02#A\x02$C\x02%E\x02&G\x02\'I\x02(K\x02)M\x02*O\x02+Q\x02,S\x02-" +
		"U\x02.W\x02/Y\x020[\x021]\x022_\x023a\x024c\x025e\x026g\x027i\x028k\x02" +
		"\x02m\x02\x02o\x02\x02q\x02\x02\x03\x02\f\x03\x022;\x04\x02ZZzz\x03\x02" +
		"))\x05\x02C\\aac|\x06\x022;C\\aac|\x04\x02\f\f\x0F\x0F\x04\x02\v\v\"\"" +
		"\x05\x022;C\\c|\x04\x02$$}}\v\x02$$^^ddhhppttvvxx}}\x02\u01B1\x02\x03" +
		"\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t" +
		"\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03" +
		"\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03" +
		"\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03" +
		"\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03" +
		"\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02" +
		"\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02" +
		"/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02" +
		"\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02" +
		"\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03" +
		"\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02" +
		"\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02" +
		"Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02" +
		"\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02" +
		"\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03" +
		"\x02\x02\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x03s\x03\x02\x02" +
		"\x02\x05z\x03\x02\x02\x02\x07\x82\x03\x02\x02\x02\t\x88\x03\x02\x02\x02" +
		"\v\x8B\x03\x02\x02\x02\r\x8E\x03\x02\x02\x02\x0F\x91\x03\x02\x02\x02\x11" +
		"\x96\x03\x02\x02\x02\x13\x9B\x03\x02\x02\x02\x15\xA0\x03\x02\x02\x02\x17" +
		"\xA3\x03\x02\x02\x02\x19\xA9\x03\x02\x02\x02\x1B\xB0\x03\x02\x02\x02\x1D" +
		"\xC7\x03\x02\x02\x02\x1F\xCB\x03\x02\x02\x02!\xCE\x03\x02\x02\x02#\xD1" +
		"\x03\x02\x02\x02%\xD4\x03\x02\x02\x02\'\xD7\x03\x02\x02\x02)\xDA\x03\x02" +
		"\x02\x02+\xDD\x03\x02\x02\x02-\xDF\x03\x02\x02\x02/\xE1\x03\x02\x02\x02" +
		"1\xE3\x03\x02\x02\x023\xE5\x03\x02\x02\x025\xE7\x03\x02\x02\x027\xE9\x03" +
		"\x02\x02\x029\xEB\x03\x02\x02\x02;\xED\x03\x02\x02\x02=\xEF\x03\x02\x02" +
		"\x02?\xF1\x03\x02\x02\x02A\xF3\x03\x02\x02\x02C\xF5\x03\x02\x02\x02E\xF7" +
		"\x03\x02\x02\x02G\xF9\x03\x02\x02\x02I\xFB\x03\x02\x02\x02K\xFD\x03\x02" +
		"\x02\x02M\xFF\x03\x02\x02\x02O\u0101\x03\x02\x02\x02Q\u010C\x03\x02\x02" +
		"\x02S\u011B\x03\x02\x02\x02U\u0124\x03\x02\x02\x02W\u0126\x03\x02\x02" +
		"\x02Y\u012A\x03\x02\x02\x02[\u0133\x03\x02\x02\x02]\u013C\x03\x02\x02" +
		"\x02_\u0145\x03\x02\x02\x02a\u014E\x03\x02\x02\x02c\u0155\x03\x02\x02" +
		"\x02e\u0159\x03\x02\x02\x02g\u0162\x03\x02\x02\x02i\u016D\x03\x02\x02" +
		"\x02k\u0172\x03\x02\x02\x02m\u0177\x03\x02\x02\x02o\u0187\x03\x02\x02" +
		"\x02q\u0199\x03\x02\x02\x02st\x07r\x02\x02tu\x07t\x02\x02uv\x07g\x02\x02" +
		"vw\x07h\x02\x02wx\x07k\x02\x02xy\x07z\x02\x02y\x04\x03\x02\x02\x02z{\x07" +
		"r\x02\x02{|\x07q\x02\x02|}\x07u\x02\x02}~\x07v\x02\x02~\x7F\x07h\x02\x02" +
		"\x7F\x80\x07k\x02\x02\x80\x81\x07z\x02\x02\x81\x06\x03\x02\x02\x02\x82" +
		"\x83\x07k\x02\x02\x83\x84\x07p\x02\x02\x84\x85\x07h\x02\x02\x85\x86\x07" +
		"k\x02\x02\x86\x87\x07z\x02\x02\x87\b\x03\x02\x02\x02\x88\x89\x07k\x02" +
		"\x02\x89\x8A\x07u\x02\x02\x8A\n\x03\x02\x02\x02\x8B\x8C\x07c\x02\x02\x8C" +
		"\x8D\x07u\x02\x02\x8D\f\x03\x02\x02\x02\x8E\x8F\x07k\x02\x02\x8F\x90\x07" +
		"h\x02\x02\x90\x0E\x03\x02\x02\x02\x91\x92\x07g\x02\x02\x92\x93\x07n\x02" +
		"\x02\x93\x94\x07u\x02\x02\x94\x95\x07g\x02\x02\x95\x10\x03\x02\x02\x02" +
		"\x96\x97\x07g\x02\x02\x97\x98\x07n\x02\x02\x98\x99\x07k\x02\x02\x99\x9A" +
		"\x07h\x02\x02\x9A\x12\x03\x02\x02\x02\x9B\x9C\x07n\x02\x02\x9C\x9D\x07" +
		"q\x02\x02\x9D\x9E\x07q\x02\x02\x9E\x9F\x07r\x02\x02\x9F\x14\x03\x02\x02" +
		"\x02\xA0\xA1\x07k\x02\x02\xA1\xA2\x07p\x02\x02\xA2\x16\x03\x02\x02\x02" +
		"\xA3\xA4\x07d\x02\x02\xA4\xA5\x07t\x02\x02\xA5\xA6\x07g\x02\x02\xA6\xA7" +
		"\x07c\x02\x02\xA7\xA8\x07m\x02\x02\xA8\x18\x03\x02\x02\x02\xA9\xAA\x07" +
		"t\x02\x02\xAA\xAB\x07g\x02\x02\xAB\xAC\x07v\x02\x02\xAC\xAD\x07w\x02\x02" +
		"\xAD\xAE\x07t\x02\x02\xAE\xAF\x07p\x02\x02\xAF\x1A\x03\x02\x02\x02\xB0" +
		"\xB1\x07%\x02\x02\xB1\xB2\x07}\x02\x02\xB2\xB6\x03\x02\x02\x02\xB3\xB5" +
		"\v\x02\x02\x02\xB4\xB3\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6\xB7" +
		"\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB7\xB9\x03\x02\x02\x02\xB8\xB6" +
		"\x03\x02\x02\x02\xB9\xBA\x07\x7F\x02\x02\xBA\x1C\x03\x02\x02\x02\xBB\xBC" +
		"\x06\x0F\x02\x02\xBC\xC8\x05k6\x02\xBD\xBF\x07\x0F\x02\x02\xBE\xBD\x03" +
		"\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC3\x07" +
		"\f\x02\x02\xC1\xC3\x07\x0F\x02\x02\xC2\xBE\x03\x02\x02\x02\xC2\xC1\x03" +
		"\x02\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xC6\x05k6\x02\xC5\xC4\x03\x02" +
		"\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC8\x03\x02\x02\x02\xC7\xBB\x03\x02" +
		"\x02\x02\xC7\xC2\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA\b\x0F" +
		"\x02\x02\xCA\x1E\x03\x02\x02\x02\xCB\xCC\x07]\x02\x02\xCC\xCD\b\x10\x03" +
		"\x02\xCD \x03\x02\x02\x02\xCE\xCF\x07_\x02\x02\xCF\xD0\b\x11\x04\x02\xD0" +
		"\"\x03\x02\x02\x02\xD1\xD2\x07*\x02\x02\xD2\xD3\b\x12\x05\x02\xD3$\x03" +
		"\x02\x02\x02\xD4\xD5\x07+\x02\x02\xD5\xD6\b\x13\x06\x02\xD6&\x03\x02\x02" +
		"\x02\xD7\xD8\x07}\x02\x02\xD8\xD9\b\x14\x07\x02\xD9(\x03\x02\x02\x02\xDA" +
		"\xDB\x07\x7F\x02\x02\xDB\xDC\b\x15\b\x02\xDC*\x03\x02\x02\x02\xDD\xDE" +
		"\x07.\x02\x02\xDE,\x03\x02\x02\x02\xDF\xE0\x07?\x02\x02\xE0.\x03\x02\x02" +
		"\x02\xE1\xE2\x07A\x02\x02\xE20\x03\x02\x02\x02\xE3\xE4\x07<\x02\x02\xE4" +
		"2\x03\x02\x02\x02\xE5\xE6\x070\x02\x02\xE64\x03\x02\x02\x02\xE7\xE8\x07" +
		"-\x02\x02\xE86\x03\x02\x02\x02\xE9\xEA\x07/\x02\x02\xEA8\x03\x02\x02\x02" +
		"\xEB\xEC\x07#\x02\x02\xEC:\x03\x02\x02\x02\xED\xEE\x07,\x02\x02\xEE<\x03" +
		"\x02\x02\x02\xEF\xF0\x071\x02\x02\xF0>\x03\x02\x02\x02\xF1\xF2\x07\'\x02" +
		"\x02\xF2@\x03\x02\x02\x02\xF3\xF4\x07`\x02\x02\xF4B\x03\x02\x02\x02\xF5" +
		"\xF6\x07%\x02\x02\xF6D\x03\x02\x02\x02\xF7\xF8\x07>\x02\x02\xF8F\x03\x02" +
		"\x02\x02\xF9\xFA\x07@\x02\x02\xFAH\x03\x02\x02\x02\xFB\xFC\x07(\x02\x02" +
		"\xFCJ\x03\x02\x02\x02\xFD\xFE\x07~\x02\x02\xFEL\x03\x02\x02\x02\xFF\u0100" +
		"\x07\x80\x02\x02\u0100N\x03\x02\x02\x02\u0101\u0102\x07^\x02\x02\u0102" +
		"P\x03\x02\x02\x02\u0103\u0104\x07v\x02\x02\u0104\u0105\x07t\x02\x02\u0105" +
		"\u0106\x07w\x02\x02\u0106\u010D\x07g\x02\x02\u0107\u0108\x07h\x02\x02" +
		"\u0108\u0109\x07c\x02\x02\u0109\u010A\x07n\x02\x02\u010A\u010B\x07u\x02" +
		"\x02\u010B\u010D\x07g\x02\x02\u010C\u0103\x03\x02\x02\x02\u010C\u0107" +
		"\x03\x02\x02\x02\u010DR\x03\x02\x02\x02\u010E\u0110\t\x02\x02\x02\u010F" +
		"\u0111\t\x02\x02\x02\u0110\u010F\x03\x02\x02\x02\u0110\u0111\x03\x02\x02" +
		"\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0113\t\x03\x02\x02\u0113\u0114" +
		"\x05o8\x02\u0114\u0115\x070\x02\x02\u0115\u0116\x05o8\x02\u0116\u011C" +
		"\x03\x02\x02\x02\u0117\u0118\x05m7\x02\u0118\u0119\x070\x02\x02\u0119" +
		"\u011A\x05m7\x02\u011A\u011C\x03\x02\x02\x02\u011B\u010E\x03\x02\x02\x02" +
		"\u011B\u0117\x03\x02\x02\x02\u011CT\x03\x02\x02\x02\u011D\u011F\t\x02" +
		"\x02\x02\u011E\u0120\t\x02\x02\x02\u011F\u011E\x03\x02\x02\x02\u011F\u0120" +
		"\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121\u0122\t\x03\x02\x02" +
		"\u0122\u0125\x05o8\x02\u0123\u0125\x05m7\x02\u0124\u011D\x03\x02\x02\x02" +
		"\u0124\u0123\x03\x02\x02\x02\u0125V\x03\x02\x02\x02\u0126\u0127\x07)\x02" +
		"\x02\u0127\u0128\n\x04\x02\x02\u0128\u0129\x07)\x02\x02\u0129X\x03\x02" +
		"\x02\x02\u012A\u012E\x07$\x02\x02\u012B\u012D\x05q9\x02\u012C\u012B\x03" +
		"\x02\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012E" +
		"\u012F\x03\x02\x02\x02\u012F\u0131\x03\x02\x02\x02\u0130\u012E\x03\x02" +
		"\x02\x02\u0131\u0132\x07$\x02\x02\u0132Z\x03\x02\x02\x02\u0133\u0137\x07" +
		"$\x02\x02\u0134\u0136\x05q9\x02\u0135\u0134\x03\x02\x02\x02\u0136\u0139" +
		"\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02" +
		"\u0138\u013A\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u013A\u013B\x07" +
		"}\x02\x02\u013B\\\x03\x02\x02\x02\u013C\u0140\x07\x7F\x02\x02\u013D\u013F" +
		"\x05q9\x02\u013E\u013D\x03\x02\x02\x02\u013F\u0142\x03\x02\x02\x02\u0140" +
		"\u013E\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0143\x03\x02" +
		"\x02\x02\u0142\u0140\x03\x02\x02\x02\u0143\u0144\x07}\x02\x02\u0144^\x03" +
		"\x02\x02\x02\u0145\u0149\x07\x7F\x02\x02\u0146\u0148\x05q9\x02\u0147\u0146" +
		"\x03\x02\x02\x02\u0148\u014B\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02" +
		"\u0149\u014A\x03\x02\x02\x02\u014A\u014C\x03\x02\x02\x02\u014B\u0149\x03" +
		"\x02\x02\x02\u014C\u014D\x07$\x02\x02\u014D`\x03\x02\x02\x02\u014E\u0152" +
		"\t\x05\x02\x02\u014F\u0151\t\x06\x02\x02\u0150\u014F\x03\x02\x02\x02\u0151" +
		"\u0154\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0152\u0153\x03\x02" +
		"\x02\x02\u0153b\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0155\u0156" +
		"\x05k6\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0158\b2\t\x02\u0158d\x03" +
		"\x02\x02\x02\u0159\u015A\x071\x02\x02\u015A\u015B\x071\x02\x02\u015B\u015F" +
		"\x03\x02\x02\x02\u015C\u015E\n\x07\x02\x02\u015D\u015C\x03\x02\x02\x02" +
		"\u015E\u0161\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u015F\u0160\x03" +
		"\x02\x02\x02\u0160f\x03\x02\x02\x02\u0161\u015F\x03\x02\x02\x02\u0162" +
		"\u0163\x07^\x02\x02\u0163\u0169\x05k6\x02\u0164\u0166\x07\x0F\x02\x02" +
		"\u0165\u0164\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0167\x03" +
		"\x02\x02\x02\u0167\u016A\x07\f\x02\x02\u0168\u016A\x07\x0F\x02\x02\u0169" +
		"\u0165\x03\x02\x02\x02\u0169\u0168\x03\x02\x02\x02\u016A\u016B\x03\x02" +
		"\x02\x02\u016B\u016C\b4\t\x02\u016Ch\x03\x02\x02\x02\u016D\u016E\v\x02" +
		"\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0170\b5\n\x02\u0170j\x03\x02" +
		"\x02\x02\u0171\u0173\t\b\x02\x02\u0172\u0171\x03\x02\x02\x02\u0173\u0174" +
		"\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02" +
		"\u0175l\x03\x02\x02\x02\u0176\u0178\t\x02\x02\x02\u0177\u0176\x03\x02" +
		"\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u0179" +
		"\u017A\x03\x02\x02\x02\u017A\u0183\x03\x02\x02\x02\u017B\u0182\x07a\x02" +
		"\x02\u017C\u017E\t\x02\x02\x02\u017D\u017C\x03\x02\x02\x02\u017E\u017F" +
		"\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02" +
		"\u0180\u0182\x03\x02\x02\x02\u0181\u017B\x03\x02\x02\x02\u0181\u017D\x03" +
		"\x02\x02\x02\u0182\u0185\x03\x02\x02\x02\u0183\u0181\x03\x02\x02\x02\u0183" +
		"\u0184\x03\x02\x02\x02\u0184n\x03\x02\x02\x02\u0185\u0183\x03\x02\x02" +
		"\x02\u0186\u0188\t\t\x02\x02\u0187\u0186\x03\x02\x02\x02\u0188\u0189\x03" +
		"\x02\x02\x02\u0189\u0187\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A" +
		"\u0193\x03\x02\x02\x02\u018B\u018D\x07a\x02\x02\u018C\u018E\t\t\x02\x02" +
		"\u018D\u018C\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u018D\x03" +
		"\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0192\x03\x02\x02\x02\u0191" +
		"\u018B\x03\x02\x02\x02\u0192\u0195\x03\x02\x02\x02\u0193\u0191\x03\x02" +
		"\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194p\x03\x02\x02\x02\u0195\u0193" +
		"\x03\x02\x02\x02\u0196\u019A\n\n\x02\x02\u0197\u0198\x07^\x02\x02\u0198" +
		"\u019A\t\v\x02\x02\u0199\u0196\x03\x02\x02\x02\u0199\u0197\x03\x02\x02" +
		"\x02\u019Ar\x03\x02\x02\x02\x1E\x02\xB6\xBE\xC2\xC5\xC7\u010C\u0110\u011B" +
		"\u011F\u0124\u012E\u0137\u0140\u0149\u0152\u015F\u0165\u0169\u0174\u0179" +
		"\u017F\u0181\u0183\u0189\u018F\u0193\u0199\v\x03\x0F\x02\x03\x10\x03\x03" +
		"\x11\x04\x03\x12\x05\x03\x13\x06\x03\x14\x07\x03\x15\b\b\x02\x02\x02\x04" +
		"\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonLexer.__ATN) {
			XonLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonLexer._serializedATN));
		}

		return XonLexer.__ATN;
	}

}

