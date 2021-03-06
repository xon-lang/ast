import { LibraryMemberContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export class LibraryMemberTree extends BaseTree {
  public name: string;

  public alias: string;

  public constructor(public ctx: LibraryMemberContext) {
    super();
    this.name = ctx._name.text;
    this.alias = ctx._alias?.text;
  }
}
