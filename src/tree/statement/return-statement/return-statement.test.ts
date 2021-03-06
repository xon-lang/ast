import { evalExpression } from '../../../eval';
import { parseStatement } from '../../../parse';
import { ReturnStatementTree } from './return-statement.tree';

test('return in scope', () => {
    const code = 'return 6+6';
    const tree = parseStatement<ReturnStatementTree>(code);

    expect(tree).toBeInstanceOf(ReturnStatementTree);
    const returnStatement = tree as ReturnStatementTree;
    expect(evalExpression(returnStatement.value)).toBe(6 + 6);
});
