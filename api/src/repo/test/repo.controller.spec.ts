import { Test, TestingModule } from '@nestjs/testing';
import { RepoController } from '../repo.controller';
import { RepoService } from '../repo.service';
import { Repo } from '../repo.entity';
import { CreateRepoDto } from '../../dto/create-repo.dto';
import { UpdateRepoDto } from '../../dto/update-repo.dto';

describe('RepoController', () => {
  let controller: RepoController;
  let service: RepoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepoController],
      providers: [
        {
          provide: RepoService,
          useValue: {
            createRepo: jest.fn(),
            getAllRepo: jest.fn(),
            deleteRepo: jest.fn(),
            getRepoById: jest.fn(),
            updateRepo: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<RepoController>(RepoController);
    service = module.get<RepoService>(RepoService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call service createRepo method with correct arguments', async () => {
    const createRepoDto: CreateRepoDto = {
      nombreProyecto: "Nombre del proyecto",
      descripcion: "Descripción del proyecto",
      fechaInicio: new Date(),
      fechaFinalizacion: new Date(),
    };
    const archivo = {} as Express.Multer.File;

    await controller.createRepo(createRepoDto, archivo);

    expect(service.createRepo).toHaveBeenCalledWith(createRepoDto, archivo);
  });

  it('should call service getAllRepo method', async () => {
    await controller.getAllRepo();

    expect(service.getAllRepo).toHaveBeenCalled();
  });

  // Add more test cases for other controller methods
});
