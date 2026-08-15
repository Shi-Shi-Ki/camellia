import { Test, TestingModule } from '@nestjs/testing';
import { DifyGatewayService } from './dify.gateway.service';

describe('DifyGatewayService', () => {
  let service: DifyGatewayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DifyGatewayService],
    }).compile();

    service = module.get<DifyGatewayService>(DifyGatewayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
