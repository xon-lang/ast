import { evalExpression, parseCode } from '../../../test-helper';
import { DivideExpressionTree } from './divide-expression.tree';

test('333 divide by 111', () => {
    const code = '333/111';
    const tree = parseCode(code, DivideExpressionTree);
    expect(evalExpression(tree)).toBe(333 / 111);
});