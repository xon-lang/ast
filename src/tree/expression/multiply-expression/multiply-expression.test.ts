import { evalExpression, parseCode } from '../../../test-helper';
import { MultiplyExpressionTree } from './multiply-expression.tree';

test('two multiply by two', () => {
    const code = '2*2';
    const tree = parseCode(code, MultiplyExpressionTree);
    expect(evalExpression(tree)).toBe(2 * 2);
});