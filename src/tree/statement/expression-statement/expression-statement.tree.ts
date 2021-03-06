import { ExpressionStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../statement.tree';

export class ExpressionStatementTree extends StatementTree {
  public value: ExpressionTree;

  public constructor(public ctx: ExpressionStatementContext) {
    super();
    this.value = getExpressionTree(ctx.expression());
  }
}
