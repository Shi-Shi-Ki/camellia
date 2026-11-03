import { Test, TestingModule } from '@nestjs/testing';
import { CreateChannelModalService } from './create-channel.modal.service';

describe('CreateChannelModalService', () => {
  let service: CreateChannelModalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateChannelModalService],
    }).compile();

    service = module.get<CreateChannelModalService>(CreateChannelModalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
