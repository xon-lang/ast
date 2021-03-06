import { evalExpression } from '../../../eval';
import { parseStatement } from '../../../parse';
import { ArrayExpressionTree } from '../../expression/array-expression/array-expression.tree';
import { FunctionExpressionTree } from '../../expression/function-expression/function-expression.tree';
import { IdExpressionTree } from '../../expression/id-expression/id-expression.tree';
import { ExpressionStatementTree } from '../expression-statement/expression-statement.tree';
import { LoopStatementTree } from './loop-statement.tree';

test('loop with value', () => {
  const code = 'loop item in [1, 2, 3]:\n    12+(45/5)';
  const tree = parseStatement<LoopStatementTree>(code);
  expect(tree.keyword).toBe('loop');
  expect(tree.valueName).toBe('item');
  expect(tree.keyName).toBeUndefined();
  expect(tree.indexName).toBeUndefined();
  expect(tree.isInfinity).toBe(false);
  expect(tree.expression).toBeInstanceOf(ArrayExpressionTree);

  expect(tree.statements.length).toBe(1);
  const statement = tree.statements[0] as ExpressionStatementTree;
  expect(evalExpression(statement.value)).toBe(12 + 45 / 5);
});

test('loop with value and key', () => {
  const code = 'loop val, key in object:\n    12+10';
  const tree = parseStatement<LoopStatementTree>(code);
  expect(tree.valueName).toBe('val');
  expect(tree.keyName).toBe('key');
  expect(tree.indexName).toBeUndefined();
  expect(tree.isInfinity).toBe(false);
  expect(tree.expression).toBeInstanceOf(IdExpressionTree);

  expect(tree.statements.length).toBe(1);
  const statement = tree.statements[0] as ExpressionStatementTree;
  expect(evalExpression(statement.value)).toBe(12 + 10);
});

test('loop with value, key and index', () => {
  const code = 'loop value, key, i in object:\n    12+10';
  const tree = parseStatement<LoopStatementTree>(code);
  expect(tree.valueName).toBe('value');
  expect(tree.keyName).toBe('key');
  expect(tree.indexName).toBe('i');
  expect(tree.isInfinity).toBe(false);
  expect(tree.expression).toBeInstanceOf(IdExpressionTree);

  expect(tree.statements.length).toBe(1);
  const statement = tree.statements[0] as ExpressionStatementTree;
  expect(evalExpression(statement.value)).toBe(12 + 10);
});

test('loop with value and index', () => {
  const code = 'loop value, key, i in object:\n    12+10';
  const tree = parseStatement<LoopStatementTree>(code);
  expect(tree.valueName).toBe('value');
  expect(tree.keyName).toBe('key');
  expect(tree.indexName).toBe('i');
  expect(tree.isInfinity).toBe(false);
  expect(tree.expression).toBeInstanceOf(IdExpressionTree);

  expect(tree.statements.length).toBe(1);
  const statement = tree.statements[0] as ExpressionStatementTree;
  expect(evalExpression(statement.value)).toBe(12 + 10);
});

test('loop with expression only', () => {
  const code = 'loop [1, 2, 3]:\n    1+1';
  const tree = parseStatement<LoopStatementTree>(code);
  expect(tree.valueName).toBeUndefined();
  expect(tree.keyName).toBeUndefined();
  expect(tree.indexName).toBeUndefined();
  expect(tree.isInfinity).toBe(false);
  expect(tree.expression).toBeInstanceOf(ArrayExpressionTree);

  expect(tree.statements.length).toBe(1);
  const statement = tree.statements[0] as ExpressionStatementTree;
  expect(evalExpression(statement.value)).toBe(1 + 1);
});

test('infinity loop', () => {
  const code = 'loop:\n   log("To infinity and beyond!")';
  const tree = parseStatement<LoopStatementTree>(code);
  expect(tree.valueName).toBeUndefined();
  expect(tree.keyName).toBeUndefined();
  expect(tree.indexName).toBeUndefined();
  expect(tree.expression).toBeUndefined();

  expect(tree.statements.length).toBe(1);
  const statement = tree.statements[0] as ExpressionStatementTree;
  expect(statement.value).toBeInstanceOf(FunctionExpressionTree);
});
