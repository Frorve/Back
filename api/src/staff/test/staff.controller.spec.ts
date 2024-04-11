import { Test, TestingModule } from '@nestjs/testing';
import { StaffController } from '../staff.controller';
import { StaffService } from '../staff.service';
import { ConflictException } from '@nestjs/common';
import { Staff } from '../staff.entity';
import { AppModule } from '../../app.module';


describe('StaffController', () => {
  let staffController: StaffController;
  let staffService: StaffService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [StaffController],
      providers: [StaffService],
    }).compile();

    staffController = module.get<StaffController>(StaffController);
    staffService = module.get<StaffService>(StaffService);

  });

  it('should create a new staff', async () => {
    const mockStaff: Staff = {
      id: 30,
      nombre: 'John Doe',
      cargo: 'Staff',
      correoElectronico: 'johny@example.com',
      contraseña: 'password',
    };
    jest.spyOn(staffService, 'createStaff').mockResolvedValueOnce(mockStaff);

    const result = await staffController.createStaff(mockStaff);
    expect(result).toEqual({ message: 'Usuario creado exitosamente', user: mockStaff });
  });

  it('should throw ConflictException if username or email already in use', async () => {
    jest.spyOn(staffService, 'createStaff').mockRejectedValueOnce(new ConflictException());

    await expect(staffController.createStaff({} as any)).rejects.toThrowError(ConflictException);
  });

});

