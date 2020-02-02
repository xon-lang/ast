import { parseCode } from '../../../test-helper';
import { PreprocessorStatementTree } from './preprocessor-statement.tree';

test('preprocessor test for any symbol', () => {
    const code =
        '#{joke wrong goal virus 40298 .RGJ^ j 6& W DCVµˆ∆∑ªº¨˙√å∂√∆π–√•∂√¶˙∆˚çßÎ◊´‰◊´®√ı}';
    const tree = parseCode(code, PreprocessorStatementTree);
});

test('preprocessor value test', () => {
    const code = '#{await m();}';
    const tree = parseCode(code, PreprocessorStatementTree);
    expect(tree.value).toBe('await m();');
});
