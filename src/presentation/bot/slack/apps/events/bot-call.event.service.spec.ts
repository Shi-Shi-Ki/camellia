import { Test, TestingModule } from '@nestjs/testing';
import { BotCallEventService } from './bot-call.event.service';

describe('BotCallEventService', () => {
  let service: BotCallEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BotCallEventService],
    }).compile();

    service = module.get<BotCallEventService>(BotCallEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
