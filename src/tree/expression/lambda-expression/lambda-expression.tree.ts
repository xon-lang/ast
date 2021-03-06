import { LambdaExpressionContext } from '../../../grammar/xon-parser';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class LambdaExpressionTree extends ExpressionTree {
  public args: {
    name: string;
    type?: TypeTree;
  }[];

  public body: ExpressionTree;

  public constructor(public ctx: LambdaExpressionContext, types?: TypeTree) {
    super();
    this.args = ctx.ID().map((x, i) => ({
      name: x.text,
      type: (ctx.type().length && new TypeTree(ctx.type(i))) || (types && types[i]),
    }));
    this.body = getExpressionTree(ctx.expression());
  }
}
