import { Test, TestingModule } from '@nestjs/testing';
import { RepoController } from '../repo.controller';
import { RepoService } from '../repo.service';
import { AppModule } from '../../app.module';

describe('RepoController', () => {
  let controller: RepoController;
  let service: RepoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
      controllers: [RepoController],
      providers: [
        {
          provide: RepoService,
          useValue: {
            createRepo: jest.fn(),
            getRepoById: jest.fn(),
            getAllRepo: jest.fn(),
            updateRepo: jest.fn(),
            deleteRepo: jest.fn(),
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

  describe('createRepo', () => {
    it('should create a new repository without an attachment', async () => {
      const repoData = {
        nombreProyecto: 'Proyecto de prueba Siu',
        descripcion: 'Esta es una descripción de prueba Siu',
        fechaInicio: new Date('2024-04-10'),
        fechaFinalizacion: new Date('2024-05-10'),
        colaboradores: 'Colaborador1, Colaborador2',
        autor: 'Autor de prueba',
      };
  
      const mockCreatedRepo = {
        id: 1,
        ...repoData,
        archivo: null,
      };
  
      jest.spyOn(service, 'createRepo').mockImplementation((data, archivo) => {
        expect(data).toEqual(repoData);
        expect(archivo).toBeUndefined();
        return Promise.resolve(mockCreatedRepo);
      });
  
      const result = await controller.createRepo(repoData, undefined);
      expect(result).toBe(mockCreatedRepo);
    });
  });
  
  

  // Add more test cases for other controller methods as needed

});
