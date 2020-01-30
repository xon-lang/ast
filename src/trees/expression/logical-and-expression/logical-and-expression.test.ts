import { parseCode, evalExpression } from '../../../test-helper';
import { LogicalAndExpressionTree } from './logical-and-expression.tree';

test('logical and', () => {
    const code = '123 & 456';
    const tree = parseCode(code,(LogicalAndExpressionTree));
    expect(tree).toBeInstanceOf(LogicalAndExpressionTree);
    expect(evalExpression(tree)).toBe(123 && 456)
});
