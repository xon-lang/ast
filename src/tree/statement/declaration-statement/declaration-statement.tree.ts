import { DeclarationStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../statement.tree';

export class DeclarationStatementTree extends StatementTree {
    name: string;
    valueType: string;
    value: ExpressionTree;

    constructor(public ctx: DeclarationStatementContext) {
        super();
        this.name = ctx.ID().text;
        this.value = ctx.expression() && getExpressionTree(ctx.expression());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            valueType: this.valueType,
            value: this.value?.toPlain(),
        };
    }
}
