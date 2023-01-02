import {Helper2} from '../helpers/helper-2.helper';
import {Foo} from '../consts/foo.const';

export class Sample2Service {
  name = 'Sample2Service';

  constructor(private foo: Foo, private helper2: Helper2) {}

  help() {
    return this.helper2(this.foo);
  }
}

export default Sample2Service;
