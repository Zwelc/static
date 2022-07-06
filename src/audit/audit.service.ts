import { Injectable } from '@nestjs/common';
import { Prisma, Audit } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuditService {
  constructor(private prisma: PrismaService) {}

  async find(where: Prisma.AuditWhereUniqueInput): Promise<Audit | null> {
    return this.prisma.audit.findUnique({ where });
  }

  async findAll() {
    return this.prisma.audit.findMany({ include: { user: true } });
  }

  async create(data: Prisma.AuditCreateInput): Promise<Audit> {
    return this.prisma.audit.create({ data });
  }

  async update(
    where: Prisma.AuditWhereUniqueInput,
    data: Prisma.AuditUpdateInput,
  ): Promise<Audit> {
    return this.prisma.audit.update({ where, data });
  }

  async delete(where: Prisma.AuditWhereUniqueInput): Promise<Audit> {
    return this.prisma.audit.delete({ where });
  }
}
