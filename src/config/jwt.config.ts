import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const getJwtConfig = async (
  configService: ConfigService
  // eslint-disable-next-line @typescript-eslint/require-await
): Promise<JwtModuleOptions> => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  secret: configService.get<string>('JWT_SECRET')
});
