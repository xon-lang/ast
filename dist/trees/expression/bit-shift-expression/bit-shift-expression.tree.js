"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_tree_1 = require("../expression.tree");
const expression_helper_1 = require("../expression-helper");
class BitShiftExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.left = expression_helper_1.getExpressionTree(ctx._left);
        this.right = expression_helper_1.getExpressionTree(ctx._right);
        this.isLeftShiftArithmetic = !!ctx.LeftShiftArithmetic();
        this.isRightShiftArithmetic = !!ctx.RightShiftArithmetic();
        this.isRightShiftLogical = !!ctx.RightShiftLogical();
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { isLeftShiftArithmetic: this.isLeftShiftArithmetic, isRightShiftArithmetic: this.isRightShiftArithmetic, isRightShiftLogical: this.isRightShiftLogical });
    }
}
exports.BitShiftExpressionTree = BitShiftExpressionTree;
//# sourceMappingURL=bit-shift-expression.tree.js.map