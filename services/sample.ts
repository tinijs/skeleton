import {Observable, ObservableChanged} from '@tinijs/core';

export class SampleService {
  name = 'SampleService';

  @Observable() name2 = 'xxx';
  name2Changed!: ObservableChanged<string>;
}

export default SampleService;
