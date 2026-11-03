import { Test, TestingModule } from '@nestjs/testing';
import { SlackRouterRepositoryService } from './slack-router.repository.service';

describe('SlackRouterRepositoryService', () => {
  let service: SlackRouterRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SlackRouterRepositoryService],
    }).compile();

    service = module.get<SlackRouterRepositoryService>(SlackRouterRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
