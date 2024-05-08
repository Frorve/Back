import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import * as bcrypt from "bcryptjs";
import { Staff } from "../../users/domain/entities/staff.entity";
import * as jwt from "jsonwebtoken";
import { CreateStaffDto } from "../../commons/domain/dto/create-staff.dto";
import { LoginStaffDto } from "../../commons/domain/dto/login-staff.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ApiBody, ApiConflictResponse, ApiOperation } from "@nestjs/swagger";
import { JwtPayload } from "../infrastructure/jwt-payload.interface";

@Injectable()
export class AuthService {
  private readonly JWT_SECRET = process.env.JWT_SECRET;

  constructor(
    @InjectRepository(Staff)
    private readonly staffRepository: Repository<Staff>
  ) {}

  @ApiOperation({ summary: "Crear un nuevo usuario" })
  @ApiConflictResponse({
    description: "El nombre de usuario o correo electrónico ya están en uso",
  })
  @ApiBody({ type: Staff })
  async registerUser(createStaffDto: CreateStaffDto): Promise<Staff> {
    const { nombre, cargo, correoElectronico, contraseña } = createStaffDto;
    const existingUser = await this.staffRepository.findOne({
      where: [{ nombre }, { correoElectronico }],
    });

    if (existingUser) {
      throw new ConflictException(
        "El nombre de usuario o correo electrónico ya están en uso"
      );
    }

    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const staff = this.staffRepository.create({
      nombre,
      cargo,
      correoElectronico,
      contraseña: hashedPassword,
    });
    return this.staffRepository.save(staff);
  }

  async login(loginStaffDto: LoginStaffDto): Promise<string | null> {
    const { nombre, contraseña } = loginStaffDto;
    const user = await this.staffRepository.findOne({ where: { nombre: nombre } });

    if (!user) {
      throw new UnauthorizedException("Credenciales incorrectas");
    }

    const passwordMatch = await bcrypt.compare(contraseña, user.contraseña);

    if (!passwordMatch) {
      throw new UnauthorizedException("Credenciales incorrectas");
    }

    const payload: JwtPayload = { nombre: user.nombre, cargo: user.cargo, correoElectronico:user.correoElectronico }; // Define los datos que deseas incluir en el token
    const token = jwt.sign(payload, this.JWT_SECRET, { expiresIn: "300h" }); // Genera el token con una duración de 300 horas

    return token;
  }

  

  async verifyToken(token: string): Promise<any> {
    try {
      const decoded = jwt.verify(token, this.JWT_SECRET);
      return decoded;
    } catch (error) {
      throw new UnauthorizedException("Token inválido");
    }
  }
}
