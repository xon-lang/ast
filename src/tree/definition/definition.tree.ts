import {
  DefinitionContext,
  InfixOperatorMemberContext,
  InitMemberContext,
  MethodMemberContext,
  PostfixOperatorMemberContext,
  PrefixOperatorMemberContext,
  PropertyMemberContext,
} from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { TypeTree } from '../type/type.tree';
import { InfixOperatorMemberTree } from './member/infix-operator-member/infix-operator-member.tree';
import { InitMemberTree } from './member/init-member/init-member.tree';
import { MethodMemberTree } from './member/method-member/method-member.tree';
import { PostfixOperatorMemberTree } from './member/postfix-operator-member/postfix-operator-member.tree';
import { PrefixOperatorMemberTree } from './member/prefix-operator-member/prefix-operator-member.tree';
import { PropertyMemberTree } from './member/property-member/property-member.tree';

export class DefinitionTree extends BaseTree {
  public name: string;

  public isAbstract: boolean;

  public abstract: TypeTree;

  public properties: PropertyMemberTree[] = [];

  public inits: InitMemberTree[] = [];

  public methods: MethodMemberTree[] = [];

  public infixOperators: InfixOperatorMemberTree[] = [];

  public prefixOperators: PrefixOperatorMemberTree[] = [];

  public postfixOperators: PostfixOperatorMemberTree[] = [];

  public constructor(public ctx: DefinitionContext) {
    super();
    this.name = ctx.ID().text;

    this.abstract = ctx.type() ? new TypeTree(ctx.type()) : TypeTree.create('Any');

    ctx.member().forEach((member) => {
      if (member instanceof PropertyMemberContext)
        this.properties.push(new PropertyMemberTree(member));

      if (member instanceof MethodMemberContext) this.methods.push(new MethodMemberTree(member));

      if (member instanceof InitMemberContext) this.inits.push(new InitMemberTree(member));

      if (member instanceof InfixOperatorMemberContext)
        this.infixOperators.push(new InfixOperatorMemberTree(member));
      if (member instanceof PrefixOperatorMemberContext)
        this.prefixOperators.push(new PrefixOperatorMemberTree(member));
      if (member instanceof PostfixOperatorMemberContext)
        this.postfixOperators.push(new PostfixOperatorMemberTree(member));
    });

    this.isAbstract = this.methods.some((x) => x.isAbstract);
  }
}
