import { Test, TestingModule } from '@nestjs/testing';
import { SsmGatewayService } from './ssm.gateway.service';

describe('SsmGatewayService', () => {
  let service: SsmGatewayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SsmGatewayService],
    }).compile();

    service = module.get<SsmGatewayService>(SsmGatewayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
