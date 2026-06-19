import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';

@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateLocationDto) {
    const location = await this.prisma.location.create({
      data: {
        imageUrl: dto.imageUrl,
        latitude: dto.latitude,
        longitude: dto.longitude,
        userId,
      },
    });

    await this.prisma.user.update({
      where: { id: userId },
      data: {
        points: {
          increment: 10,
        },
      },
    });

    return location;
  }
}