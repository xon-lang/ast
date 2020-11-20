import { IfStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getStatementsTree } from '../statement-helper';
import { StatementTree } from '../statement.tree';

export class IfStatementTree extends StatementTree {
    items: {
        statements: StatementTree[];
        condition: ExpressionTree;
        hasIf: boolean;
        hasElse: boolean;
    }[] = [];

    constructor(public ctx?: IfStatementContext) {
        super();
        if (!ctx) return;

        this.items = ctx.expression().map((x, i) => ({
            statements: getStatementsTree(ctx.body(i)),
            condition: getExpressionTree(x),
            hasIf: true,
            hasElse: !!i,
        }));
        if (ctx.Else()) {
            this.items.push({
                statements: getStatementsTree(ctx.body(ctx.body().length - 1)),
                condition: null,
                hasIf: false,
                hasElse: true,
            });
        }
    }

    toPlain() {
        return {
            ...super.toPlain(),
            items: this.items.map((x) => ({
                statements: x.statements.map((z) => z.toPlain()),
                condition: x.condition?.toPlain(),
                hasIf: x.hasIf,
                hasElse: x.hasElse,
            })),
        };
    }
}