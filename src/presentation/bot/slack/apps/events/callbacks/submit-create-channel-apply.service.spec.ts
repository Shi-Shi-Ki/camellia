import { Test, TestingModule } from '@nestjs/testing';
import { SubmitCreateChannelApplyService } from './submit-create-channel-apply.service';

describe('SubmitCreateChannelApplyService', () => {
  let service: SubmitCreateChannelApplyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubmitCreateChannelApplyService],
    }).compile();

    service = module.get<SubmitCreateChannelApplyService>(SubmitCreateChannelApplyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
