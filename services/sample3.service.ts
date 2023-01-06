import {SampleService} from './sample.service';

export class Sample3Service {
  name = 'Sample3Service';

  constructor(private sampleService: SampleService) {}

  sample() {
    return this.sampleService;
  }

  sampleName() {
    return this.sampleService.name;
  }
}

export default Sample3Service;
