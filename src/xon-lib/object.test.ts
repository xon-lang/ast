import { parseExpression } from '../parse';
import { LiteralExpressionTree } from '../tree/expression/literal-expression/literal-expression.tree';

test('object clone method exists', () => {
  const code = '5';
  const tree = parseExpression<LiteralExpressionTree>(code);
  expect(tree.getType().name).toBe('Number');
  const definition = tree.getType().definition();
  expect(definition.inheritances.length).toBe(1);
  expect(definition.inheritances[0].type.name).toBe('Object');
  expect(definition.inheritances[0].type.generics.length).toBe(0);
  expect(definition.inheritances[0].type.definition().methods.some((x) => x.name === 'clone')).toBe(
    true
  );
});
