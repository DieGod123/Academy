import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty({
    description: 'Nombre del estudiante',
    example: 'Ana',
    minLength: 2,
    maxLength: 50
  })
  nombre: string;

  @ApiProperty({
    description: 'Apellido del estudiante',
    example: 'García',
    minLength: 2,
    maxLength: 50
  })
  apellido: string;

  @ApiProperty({
    description: 'Edad del estudiante',
    example: 20,
    minimum: 16,
    maximum: 100
  })
  edad: number;

  @ApiProperty({
    description: 'Correo electrónico del estudiante',
    example: 'ana.garcia@email.com',
    format: 'email'
  })
  email: string;

  @ApiProperty({
    description: 'Carrera que estudia el estudiante',
    example: 'Ingeniería de Sistemas',
    minLength: 5,
    maxLength: 100
  })
  carrera: string;

  @ApiProperty({
    description: 'Semestre actual del estudiante',
    example: 5,
    minimum: 1,
    maximum: 12
  })
  semestre: number;
}

